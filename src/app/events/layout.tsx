import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events - Freeway Church',
  description: 'Discover upcoming events at Freeway Church. Join us for worship services, Bible studies, youth programs, and community events. Connect, Cultivate, and Contribute with our church family.',
  keywords: 'Freeway Church events, church activities, Sunday service, Bible study, youth group, community events, Albion Michigan church',
  openGraph: {
    title: 'Events - Freeway Church',
    description: 'Discover upcoming events at Freeway Church. Join us for worship services, Bible studies, youth programs, and community events.',
    url: 'https://freeway.church/events',
    siteName: 'Freeway Church',
    images: [
      {
        url: '/images/FreewayBuilding.jpg',
        width: 1200,
        height: 630,
        alt: 'Freeway Church Building',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events - Freeway Church',
    description: 'Discover upcoming events at Freeway Church. Connect, Cultivate, and Contribute with our church family.',
    images: ['/images/FreewayBuilding.jpg'],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}