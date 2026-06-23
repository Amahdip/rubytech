"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { AnchorLink } from "@/components/anchor-link";
import { PremiumButton } from "@/components/ui/premium-button";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const { t, locale, setLocale } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const services = [
    { label: t("nav.items.backend"), href: "#capabilities" },
    { label: t("nav.items.devops"), href: "#capabilities" },
    { label: t("nav.items.frontend"), href: "#capabilities" },
    { label: t("nav.items.microservices"), href: "#capabilities" },
    { label: t("nav.items.distributed"), href: "#capabilities" },
  ];

  const navLinks = [
    { label: t("nav.capabilities"), href: "#capabilities" },
    { label: t("nav.architecture"), href: "#engine" },
    { label: t("nav.caseStudies"), href: "#case-studies" },
    { label: t("nav.process"), href: "#process" },
  ];

  const handleMobileNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="glass-strong mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="flex size-8 items-center justify-center rounded-lg bg-ruby/15 ring-1 ring-ruby/30"
          >
            <span className="size-3 rounded-full bg-ruby ruby-glow" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Tech<span className="text-ruby">Ruby</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-hover hover:text-foreground"
              >
                {t("nav.services")}
                <ChevronDown className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {services.map((service) => (
                <DropdownMenuItem key={service.label} asChild>
                  <AnchorLink href={service.href}>{service.label}</AnchorLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <AnchorLink
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-hover hover:text-foreground"
            >
              {link.label}
            </AnchorLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => setLocale(locale === "en" ? "fa" : "en")}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-panel-muted text-xs font-bold tracking-wider text-muted-foreground hover:bg-hover hover:text-foreground transition-all duration-200 cursor-pointer"
            aria-label="Toggle language"
          >
            {locale === "en" ? "FA" : "EN"}
          </button>
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <AnchorLink href="#contact">{t("nav.contact")}</AnchorLink>
          </Button>
          <PremiumButton href="#contact" size="default">
            {t("nav.schedule")}
          </PremiumButton>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={() => setLocale(locale === "en" ? "fa" : "en")}
            className="inline-flex size-10 items-center justify-center rounded-lg text-xs font-bold tracking-wider text-muted-foreground hover:bg-hover hover:text-foreground transition-all duration-200 cursor-pointer"
            aria-label="Toggle language"
          >
            {locale === "en" ? "FA" : "EN"}
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-hover hover:text-foreground"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "glass-strong mx-4 mt-2 overflow-hidden rounded-2xl transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <AnchorLink
              key={link.href}
              href={link.href}
              onClick={handleMobileNavClick}
              className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-hover hover:text-foreground"
            >
              {link.label}
            </AnchorLink>
          ))}
          <Button className="mt-2 w-full" asChild>
            <AnchorLink href="#contact" onClick={handleMobileNavClick}>
              {t("nav.schedule")}
            </AnchorLink>
          </Button>
        </div>
      </div>
    </header>
  );
}
