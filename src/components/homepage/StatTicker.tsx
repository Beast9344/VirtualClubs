"use client";

import { BarChart3, Users, Trophy, Zap, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const dummyStats = [
  { icon: Users, label: "Active Players", value: "12,345" },
  { icon: BarChart3, label: "Matches Played Today", value: "5,678" },
  { icon: Trophy, label: "Top Player Goals", value: "257" },
  { icon: Zap, label: "XP Earned (24h)", value: "1.2M" },
  { icon: TrendingUp, label: "New Sign-ups", value: "+150" },
  { icon: Users, label: "Active Leagues", value: "450" },
  { icon: BarChart3, label: "Avg. Match Rating", value: "7.8" },
  { icon: Trophy, label: "Team of the Week Wins", value: "Dynamo FC (5)" },
];

export function StatTicker() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a static version or nothing SSR to avoid layout shifts / animation issues
    return (
      <div className="bg-background/50 py-4 border-y border-border/40">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">Loading live stats...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background/50 py-4 border-y border-border/40 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative h-8"> {/* Ensure consistent height for the ticker area */}
          <div className="animate-stat-ticker-scroll absolute top-0 left-0 w-full">
            {/* Duplicate stats for seamless looping effect */}
            {[...dummyStats, ...dummyStats].map((stat, index) => (
              <div key={index} className="flex items-center justify-center space-x-6 py-1 h-8">
                <div className="flex items-center text-sm text-foreground/90">
                  <stat.icon className="mr-2 h-4 w-4 text-primary" />
                  <span className="font-medium">{stat.label}:</span>
                  <span className="ml-1 text-accent font-semibold">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
