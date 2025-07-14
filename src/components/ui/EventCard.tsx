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
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xl font-semibold">
              {event.title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
        
        <div className="text-sm text-gray-600 mb-3">
          <p className="mb-1">{formatDate(event.start)}</p>
          <p className="mb-1">{formatTime(event.start)} - {formatTime(event.end)}</p>
          {event.location && <p>{event.location}</p>}
        </div>
        
        {event.description && (
          <p className="text-gray-700 mb-4 text-sm line-clamp-3">
            {event.description}
          </p>
        )}
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
}