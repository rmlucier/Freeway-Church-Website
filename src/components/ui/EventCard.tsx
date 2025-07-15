import Image from 'next/image';
import { CalendarEvent } from '@/lib/google-calendar';

interface EventCardProps {
  event: CalendarEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Detroit',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/Detroit',
    });
  };

  return (
    <div className="bg-neutral-near-black rounded-3xl border border-neutral-dark-gray overflow-hidden hover:border-primary transition-all duration-300">
      <div className="relative h-48 bg-neutral-dark-gray">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <span className="text-white text-xl font-semibold">
              {event.title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
        
        <div className="text-sm text-neutral-light-gray mb-3">
          <p className="mb-1">{formatDate(event.start)}</p>
          <p className="mb-1">{formatTime(event.start)} - {formatTime(event.end)}</p>
          {event.location && <p>{event.location}</p>}
        </div>
        
        {event.description && (
          <p className="text-neutral-light-gray mb-4 text-sm line-clamp-3">
            {event.description}
          </p>
        )}
        
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200 text-sm font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
}