/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rRpAl5o7vBn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
  LocateIcon,
  MailIcon,
  PhoneIcon,
  ConciergeBellIcon,
  BarChartIcon,
  PocketIcon,
  HomeIcon,
  SpadeIcon,
  ParkingMeterIcon,
  WifiIcon,
  MenuIcon,
  BarChart,
  Bell as ConciergeBell,
  Home,
  MapPin as Locate,
  Mail,
  Menu,
  ParkingMeter,
  Phone,
  Pocket,
  Spa as Spade,
  Wifi,
} from 'lucide-react';
export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="w-full bg-primary text-primary-foreground py-4 px-6 md:px-10 lg:px-16 flex items-center justify-between">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          Acme Hotel
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Rooms
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Amenities
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button className="hidden md:inline-flex">Book Now</Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
          <img src="/placeholder.svg" alt="Hotel Exterior" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 md:px-10 lg:px-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Acme Hotel</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">Luxury accommodations in the heart of the city.</p>
            <Button>Book Now</Button>
          </div>
        </section>
        <section id="rooms" className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-10 lg:px-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Our Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Room 1"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Deluxe Room</h3>
                  <p className="text-muted-foreground mb-4">
                    Spacious room with king-size bed, en-suite bathroom, and city view.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">$199/night</span>
                    <Button>Book Now</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Room 2"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Premium Room</h3>
                  <p className="text-muted-foreground mb-4">
                    Luxurious room with king-size bed, en-suite bathroom, and private balcony.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">$299/night</span>
                    <Button>Book Now</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Room 3"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Suite</h3>
                  <p className="text-muted-foreground mb-4">
                    Spacious suite with separate living area, king-size bed, and panoramic city view.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">$399/night</span>
                    <Button>Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="amenities" className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-10 lg:px-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-4">
                <WifiIcon className="w-6 h-6 text-primary" />
                <span>Free Wifi</span>
              </div>
              <div className="flex items-center gap-4">
                <ParkingMeterIcon className="w-6 h-6 text-primary" />
                <span>Free Parking</span>
              </div>
              <div className="flex items-center gap-4">
                <SpadeIcon className="w-6 h-6 text-primary" />
                <span>Spa Services</span>
              </div>
              <div className="flex items-center gap-4">
                <HomeIcon className="w-6 h-6 text-primary" />
                <span>Fitness Center</span>
              </div>
              <div className="flex items-center gap-4">
                <PocketIcon className="w-6 h-6 text-primary" />
                <span>Outdoor Pool</span>
              </div>
              <div className="flex items-center gap-4">
                <MenuIcon className="w-6 h-6 text-primary" />
                <span>On-site Restaurant</span>
              </div>
              <div className="flex items-center gap-4">
                <BarChartIcon className="w-6 h-6 text-primary" />
                <span>Rooftop Bar</span>
              </div>
              <div className="flex items-center gap-4">
                <ConciergeBellIcon className="w-6 h-6 text-primary" />
                <span>Concierge Service</span>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-10 lg:px-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  Have a question or want to book your stay? Fill out the form below and we'll get back to you as soon
                  as possible.
                </p>
                <form className="grid gap-4">
                  <Input type="text" placeholder="Name" className="w-full" />
                  <Input type="email" placeholder="Email" className="w-full" />
                  <Textarea placeholder="Message" rows={5} className="w-full" />
                  <Button type="submit">Submit</Button>
                </form>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                  <span>+1 (555) 555-5555</span>
                </div>
                <div className="flex items-center gap-4">
                  <MailIcon className="w-6 h-6 text-primary" />
                  <span>info@acmehotel.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <LocateIcon className="w-6 h-6 text-primary" />
                  <span>123 Main St, Anytown USA</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 md:px-10 lg:px-16 flex items-center justify-between">
        <p>&copy; 2023 Acme Hotel. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  )
}
