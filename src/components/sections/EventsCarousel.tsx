'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { fetchCalendarEvents, CalendarEvent } from '@/lib/google-calendar';
import EventCard from '@/components/ui/EventCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function EventsCarousel() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      try {
        const fetchedEvents = await fetchCalendarEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Failed to load events:', error);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-white">Loading events...</div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-light-gray">No upcoming events found.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={20}
        slidesPerView={1.1}
        navigation
        mousewheel={true}
        keyboard={true}
        breakpoints={{
          640: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4.25,
            spaceBetween: 30,
          },
        }}
        className="events-carousel"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}