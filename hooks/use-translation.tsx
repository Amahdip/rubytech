"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "../locales/en.json";
import fa from "../locales/fa.json";

type Locale = "en" | "fa";

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, variables?: Record<string, string | number>) => any;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = { en, fa };

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedLocale = (localStorage.getItem("techruby-locale") ||
        localStorage.getItem("rubytech-locale")) as Locale;
      if (savedLocale === "en" || savedLocale === "fa") {
        setLocaleState(savedLocale);
      }
    } catch (e) {}
  }, []);

  // Update HTML dir and lang attributes on locale change
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
    }
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("techruby-locale", newLocale);
    } catch (e) {}
  }, []);

  const t = useCallback((key: string, variables?: Record<string, string | number>) => {
    const keys = key.split(".");
    let value: any = translations[locale];

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        // Fallback to English translation first, then fallback to key
        let fallbackValue: any = translations["en"];
        for (const fk of keys) {
          if (fallbackValue && fallbackValue[fk] !== undefined) {
            fallbackValue = fallbackValue[fk];
          } else {
            fallbackValue = key;
            break;
          }
        }
        value = fallbackValue;
        break;
      }
    }

    if (typeof value === "string" && variables) {
      return Object.entries(variables).reduce((acc, [variableName, variableValue]) => {
        return acc.replace(`{${variableName}}`, String(variableValue));
      }, value);
    }

    return value;
  }, [locale]);

  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  
  if (!context) {
    // Return a safe fallback if used outside TranslationProvider (like on SSR initial load or standalone)
    const tFallback = (key: string, variables?: Record<string, string | number>) => {
      const keys = key.split(".");
      let value: any = en;

      for (const k of keys) {
        if (value && value[k] !== undefined) {
          value = value[k];
        } else {
          return key;
        }
      }

      if (typeof value === "string" && variables) {
        return Object.entries(variables).reduce((acc, [variableName, variableValue]) => {
          return acc.replace(`{${variableName}}`, String(variableValue));
        }, value);
      }

      return value;
    };

    return {
      locale: "en" as Locale,
      setLocale: () => {},
      t: tFallback,
    };
  }

  return context;
}
