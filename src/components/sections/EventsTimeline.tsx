"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarEvent } from '@/app/api/events/route';

interface EventsTimelineProps {
  events: CalendarEvent[];
}

export default function EventsTimeline({ events }: EventsTimelineProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      day: date.getDate(),
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
      time: date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
      })
    };
  };

  const groupEventsByMonth = (events: CalendarEvent[]) => {
    const grouped: { [key: string]: CalendarEvent[] } = {};
    events.forEach(event => {
      const date = new Date(event.start);
      const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }
      grouped[monthYear].push(event);
    });
    return grouped;
  };

  const groupedEvents = groupEventsByMonth(events);

  return (
    <section className="py-20 bg-neutral-black">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-8 text-white">
            Events <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-light-gray max-w-4xl mx-auto font-light leading-relaxed">
            Mark your calendars for these absolutely dynamic upcoming opportunities to 
            connect, grow, and serve together as the Freeway Church family!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {Object.entries(groupedEvents).map(([monthYear, monthEvents], monthIndex) => (
            <div key={monthYear} className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: monthIndex * 0.1 }}
                className="mb-8"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
                  {monthYear}
                </h3>
                <div className="h-px bg-gradient-to-r from-primary via-primary-light to-transparent"></div>
              </motion.div>

              <div className="space-y-6">
                {monthEvents.map((event, eventIndex) => {
                  const dateInfo = formatDate(event.start);
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: (monthIndex * 0.1) + (eventIndex * 0.05) }}
                      className="flex items-start space-x-6 group"
                    >
                      <div className="flex-shrink-0 relative">
                        <div className="bg-primary text-white rounded-xl p-4 text-center min-w-[80px] group-hover:bg-primary-dark transition-colors">
                          <div className="text-xs font-medium opacity-90">{dateInfo.weekday}</div>
                          <div className="text-2xl font-bold">{dateInfo.day}</div>
                          <div className="text-xs font-medium opacity-90">{dateInfo.month}</div>
                        </div>
                        {eventIndex < monthEvents.length - 1 && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-6 bg-neutral-dark-gray mt-2"></div>
                        )}
                      </div>

                      <div className="flex-1 bg-neutral-near-black rounded-xl p-6 border border-neutral-dark-gray group-hover:border-primary transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h4 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                            {event.title}
                          </h4>
                          <div className="flex items-center text-neutral-light-gray text-sm mt-1 md:mt-0">
                            <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {dateInfo.time}
                          </div>
                        </div>

                        {event.location && (
                          <div className="flex items-center text-neutral-light-gray mb-3">
                            <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm">{event.location}</span>
                          </div>
                        )}

                        {event.description && (
                          <p className="text-neutral-light-gray text-sm leading-relaxed mb-4">
                            {event.description}
                          </p>
                        )}

                        <div className="flex items-center justify-between">
                          <button className="text-primary hover:text-primary-light font-medium text-sm transition-colors">
                            Add to Calendar
                          </button>
                          <div className="flex space-x-2">
                            <button className="p-2 rounded-full bg-neutral-dark-gray hover:bg-primary text-white transition-colors">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {events.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">No Upcoming Events</h3>
            <p className="text-neutral-light-gray max-w-md mx-auto">
              Check back soon for exciting upcoming events at Freeway Church!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}