/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dlHMEWJHvC2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from 'next/image';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-[100dvh]" id="home">
      <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2 font-bold" href="#">
            <Image src="/gershom's-logo.png" alt="Logo" width={75} height={75} className="rounded-xl group-hover:scale-110" />
            <span>Gershom Gbadebo</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link className="rounded-md px-3 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" href="#home">
              Home
            </Link>
            <Link className="rounded-md px-3 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" href="#about">
              About
            </Link>
            <Link className="rounded-md px-3 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" href="#projects">
              Projects
            </Link>
            <Link className="rounded-md px-3 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" href="#contact">
              Contact
            </Link>
          </nav>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </header>
      <main className="w-full max-w-screen-lg column">
        <section className="relative w-full h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
          {/* <Image
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            src="/placeholder.svg"
          /> */}
          <div className="relative z-10 text-center space-y-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Gershom Gbadebo</h1>
            <p className="text-xl text-gray-300">Full-Stack Web Developer</p>
            <p className="text-lg text-gray-400 max-w-3xl">
              Crafting beautiful and functional websites that bring your ideas to life.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                href="#projects"
              >
                View Work
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-transparent px-4 py-2 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                href="#contact"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container max-w-4xl px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I&aposm a passionate web developer with a strong background in building modern, responsive, and user-friendly
                  web applications. With a keen eye for design and a deep understanding of the latest web technologies, I
                  strive to create elegant and efficient solutions that deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto py-12 px-4 md:px-6" id="projects">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="text-gray-500 dark:text-gray-400">
              I&aposve worked on a variety of web projects, from a movie-management platform to custom websites. Here
              are some of my best projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
              <Link className="block" href="#">
                <Image
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">
                  <Link className="hover:text-primary-500 transition-colors" href="#">
                    Project 1
                  </Link>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">A brief description of the first project.</p>
                <div className="flex items-center justify-between">
                  <Link
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                    href="#"
                  >
                    <LinkIcon className="mr-1 w-4 h-4" />
                    Live Demo
                  </Link>
                  <Link
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                    href="#"
                  >
                    <GithubIcon className="mr-1 w-4 h-4" />
                    Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
              <Link className="block" href="#">
                <Image
                  alt="Project 2"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">
                  <Link className="hover:text-primary-500 transition-colors" href="#">
                    Project 2
                  </Link>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">A brief description of the second project.</p>
                <div className="flex items-center justify-between">
                  <Link
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                    href="#"
                  >
                    <LinkIcon className="mr-1 w-4 h-4" />
                    Live Demo
                  </Link>
                  <Link
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                    href="#"
                  >
                    <GithubIcon className="mr-1 w-4 h-4" />
                    Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
              <Link className="block" href="#">
                <Image
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">
                  <Link className="hover:text-primary-500 transition-colors" href="#">
                    Project 3
                  </Link>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">A brief description of the third project.</p>
                <div className="flex items-center justify-between">
                  <Link
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                    href="#"
                  >
                    <LinkIcon className="mr-1 w-4 h-4" />
                    Live Demo
                  </Link>
                  <Link
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                    href="#"
                  >
                    <GithubIcon className="mr-1 w-4 h-4" />
                    Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
              <Link className="block" href="#">
                <Image
                  alt="Project 4"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">
                  <Link className="hover:text-primary-500 transition-colors" href="#">
                    Project 4
                  </Link>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">A brief description of the fourth project.</p>
                <div className="flex items-center justify-between">
                  <Link
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                    href="#"
                  >
                    <LinkIcon className="mr-1 w-4 h-4" />
                    Live Demo
                  </Link>
                  <Link
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                    href="#"
                  >
                    <GithubIcon className="mr-1 w-4 h-4" />
                    Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Check Out My Resume</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                My resume highlights my expertise in HTML, CSS, JavaScript, and various front-end
                frameworks and libraries.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                <FileIcon className="mr-2 h-4 w-4" />
                Check Out My Resume
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="contact">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Me</h2>
                <p className="max-w-screen-lg text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I&aposm always excited to connect with new people and build potential projects. Feel free to reach out
                  using the form below.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4 pt-8">
              <form className="grid gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="you@example.com" required type="email" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" required rows={5} />
                </div>
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-400 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col items-start">
              <Link className="inline-flex items-center space-x-2 mb-4" href="#">
                <span className="text-lg font-semibold text-gray-200">About Me</span>
              </Link>
              <p className="text-sm leading-relaxed">
                Gershom Gbadebo is a full-stack web developer with a passion for creating beautiful and functional websites.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link className="hover:text-gray-300" href="#">
                  <GithubIcon className="h-5 w-5" />
                </Link>
                <Link className="hover:text-gray-300" href="#">
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
                <Link className="hover:text-gray-300" href="#">
                  <MailIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-5 w-5" />
                  <span className="text-sm">+1 (609) 445-0117</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MailIcon className="h-5 w-5" />
                  <span className="text-sm">gershomog@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function GitGraphIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function HashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
}


function LeafIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function RedoDotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="17" r="1" />
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  )
}


function RssIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  )
}


function WindIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}