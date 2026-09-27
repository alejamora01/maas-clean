import Image from 'next/image';
import {
  Sparkles,
  ShieldCheck,
  User,
  Home,
  Mail,
  Clock,
  Bell,
  MapPin,
  Star,
  ArrowRight,
} from 'lucide-react';

import CallButton from '@/components/ui/CallButton';
import NewsletterForm from '@/components/sections/NewsletterForm';
import home from '@/data/home.json';
import site from '@/data/site.json';

const featureIcons = {
  sparkles: Sparkles,
  'shield-check': ShieldCheck,
  user: User,
  home: Home,
};

export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full blur-3xl"
          style={{ background: 'rgba(0,229,255,0.08)' }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full blur-3xl"
          style={{ background: 'rgba(132,255,0,0.05)' }}
        />

        <div className="container-page relative grid min-h-[680px] grid-cols-1 items-center gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">

          <div className="order-2 lg:order-1">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-md">
              <MapPin className="h-4 w-4 text-cyan-300" />
              <span className="text-xs font-semibold tracking-[0.18em] text-cyan-200">
                MIAMI, FLORIDA
              </span>
            </div>

            <p className="eyebrow mb-4">
              PREMIUM CLEANING SERVICES
            </p>

            <h1 className="max-w-2xl font-display text-6xl leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
              <span className="block text-white">
                We Clean.
              </span>
              <span className="gradient-text block">
                You Relax.
              </span>
            </h1>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-20 bg-cyan-400/70" />
              <span className="h-2 w-2 rotate-45 bg-lime-400 shadow-[0_0_15px_rgba(132,255,0,0.7)]" />
              <span className="h-px w-12 bg-orange-400/50" />
            </div>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              Professional cleaning services for homes and businesses across
              Miami. Beautiful spaces, spotless results, zero stress.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CallButton variant="primary" />

              <a
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/45">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-400" />
                Licensed & Insured
              </span>

              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-lime-400" />
                Professional Team
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-2xl">

              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2rem] blur-3xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0,229,255,0.12), transparent 45%, rgba(132,255,0,0.08))',
                }}
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/images/home-kitchen.png"
                    alt="Professional cleaning in a modern home"
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(0,0,0,0.55), transparent 45%, rgba(0,0,0,0.35))',
                    }}
                  />

                  <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-cyan-300/20" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/65 p-4 backdrop-blur-xl">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                      MAAS CLEAN
                    </p>
                    <p className="mt-1 text-sm text-white/60">
                      Your space. Our standard.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-lime-400/30 bg-lime-400/10">
                    <Sparkles className="h-5 w-5 text-lime-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="container-page py-16 lg:py-24">
        <div className="mb-12 text-center">
          <p className="eyebrow">THE MAAS STANDARD</p>

          <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">
            Clean that feels different.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Professional service with attention to the details that make your
            space feel completely refreshed.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {home.features.map((feature, index) => {
            const Icon = featureIcons[feature.icon] || Sparkles;

            return (
              <div
                key={feature.title}
                className="card-bordered group p-6 text-center"
                style={{
                  animation: `fadeUp 0.6s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 transition-all group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>

                <h3 className="mt-5 font-display text-xl text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT / HOURS */}
      <section className="container-page py-6">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/15 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8">

          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl"
          />

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr]">

            <div className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/5 text-cyan-300">
                <Mail className="h-5 w-5" />
              </span>

              <div>
                <h3 className="text-xs font-bold tracking-[0.25em] text-cyan-300">
                  EMAIL US
                </h3>

                <ul className="mt-3 space-y-2">
                  {site.company.emails.map((email) => (
                    <li key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="text-sm text-white/65 transition-colors hover:text-cyan-300"
                      >
                        {email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="hidden items-center md:flex">
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />
            </div>

            <div className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/5 text-lime-300">
                <Clock className="h-5 w-5" />
              </span>

              <div>
                <h3 className="text-xs font-bold tracking-[0.25em] text-lime-300">
                  HOURS
                </h3>

                <ul className="mt-3 space-y-2 text-sm text-white/65">
                  <li>{site.company.hours.weekdays}</li>
                  <li>{site.company.hours.saturday}</li>
                  <li>{site.company.hours.sunday}</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container-page py-6 pb-20 lg:pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/[0.07] via-white/[0.02] to-lime-400/[0.04] p-7 sm:p-9">

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/5 text-cyan-300">
              <Bell className="h-6 w-6" />
            </div>

            <div className="text-center md:text-left">
              <p className="text-xs font-bold tracking-[0.25em] text-cyan-300">
                STAY IN THE LOOP
              </p>

              <h3 className="mt-2 font-display text-2xl text-white">
                Cleaning tips & Miami specials.
              </h3>

              <p className="mt-1 text-sm text-white/45">
                Get occasional updates, offers, and seasonal cleaning tips.
              </p>
            </div>

            <div className="w-full md:ml-auto md:max-w-md">
              <NewsletterForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
