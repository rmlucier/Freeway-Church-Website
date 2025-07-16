"use client";

import { useState, useEffect } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EventsHero from "@/components/sections/EventsHero";
import EventsGrid from "@/components/sections/EventsGrid";
import EventsTimeline from "@/components/sections/EventsTimeline";
import EventsCTA from "@/components/sections/EventsCTA";
import { CalendarEvent } from '@/app/api/events/route';

export default function EventsPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <EventsHero />
        
        {/* View Toggle */}
        <section className="py-8 bg-neutral-black border-b border-neutral-dark-gray">
          <div className="section-container">
            <div className="flex justify-center">
              <div className="bg-neutral-near-black rounded-xl p-1 flex">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-primary text-white'
                      : 'text-neutral-light-gray hover:text-white'
                  }`}
                >
                  Grid View
                </button>
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    viewMode === 'timeline'
                      ? 'bg-primary text-white'
                      : 'text-neutral-light-gray hover:text-white'
                  }`}
                >
                  Timeline View
                </button>
              </div>
            </div>
          </div>
        </section>

        {loading ? (
          <section className="py-20 bg-neutral-near-black">
            <div className="section-container text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-neutral-light-gray">Loading events...</p>
            </div>
          </section>
        ) : (
          <>
            {viewMode === 'grid' ? (
              <EventsGrid events={events} />
            ) : (
              <EventsTimeline events={events} />
            )}
          </>
        )}
        
        <EventsCTA />
      </main>
      <Footer />
    </>
  );
}