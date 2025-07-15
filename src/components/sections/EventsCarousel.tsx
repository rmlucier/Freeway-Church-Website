'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
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
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.1}
        navigation
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.2,
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