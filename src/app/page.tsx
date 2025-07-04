'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Settings, Moon, Sun, ArrowRight } from 'lucide-react';
import { PostsList } from "@/components/posts-list";
import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <header className="border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-10 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:opacity-80 transition-opacity">
                Posts Hub
              </h1>
              <p className="hidden sm:block text-slate-600 dark:text-slate-400 text-sm transition-colors">
                Discover and read amazing posts
              </p>
            </Link>

            <div className="flex items-center gap-2">
              {mounted ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle theme"
                  className="hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 transition-transform hover:rotate-12" />
                  ) : (
                    <Moon className="w-5 h-5 transition-transform hover:rotate-12" />
                  )}
                </Button>
              ) : (
                <Skeleton className="w-9 h-9 rounded-md" />
              )}

              <Link href="/admin">
                <Button variant="outline" className="gap-2 transition-all hover:gap-3">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Admin Dashboard</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 text-white py-16 md:py-24 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">
            Welcome to Posts Hub
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 animate-fade-in [animation-delay:100ms]">
            A modern place to explore, read, and manage your posts effortlessly.
          </p>
          <Link href="#posts" className="animate-fade-in [animation-delay:200ms] inline-block">
            <Button
              size="lg"
              className="text-white bg-white/20 hover:bg-white/30 transition-all group"
            >
              Explore Posts
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <main id="posts" className="container mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="mb-10 text-center animate-fade-in [animation-delay:300ms]">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Latest Posts
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Browse through our fresh and insightful content.
          </p>
        </div>

        <PostsList />
      </main>
    </div>
  );
}