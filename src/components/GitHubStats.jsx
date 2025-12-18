import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Users, BookOpen, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data';

const GitHubStats = () => {
  const { personalInfo } = portfolioData;
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${personalInfo.githubUsername}`);
        if (!response.ok) throw new Error('Failed to fetch GitHub data');
        const data = await response.json();
        
        // In a real scenario, you might want to fetch repo colors or more detailed stats
        // For now, we'll use the basic user data
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          gists: data.public_gists,
          profileUrl: data.html_url,
          avatarUrl: data.avatar_url,
          bio: data.bio
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [personalInfo.githubUsername]);

  if (loading) return null; // Or a subtle skeleton loader

  return (
    <section id="github" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Profile Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1 text-center md:text-left space-y-4"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-xl opacity-20 animate-pulse" />
                <img 
                  src={stats?.avatarUrl} 
                  alt="GitHub Avatar" 
                  className="w-32 h-32 rounded-2xl border-2 border-white/10 relative z-10 mx-auto md:mx-0"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                  <Github className="text-cyan-400" size={24} />
                  GitHub Activity
                </h3>
                <p className="text-slate-400 text-sm mt-2">{stats?.bio || 'Building and contributing to open source.'}</p>
              </div>
              <a 
                href={stats?.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 border border-white/10 text-white text-sm hover:bg-slate-800 transition-colors group"
              >
                Follow on GitHub
                <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* Stats Cards */}
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Repositories', value: stats?.repos, icon: BookOpen, color: 'text-blue-400' },
                { label: 'Followers', value: stats?.followers, icon: Users, color: 'text-cyan-400' },
                { label: 'Following', value: stats?.following, icon: Star, color: 'text-purple-400' },
                { label: 'Public Gists', value: stats?.gists, icon: GitFork, color: 'text-emerald-400' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 text-center group hover:border-cyan-400/30 transition-colors"
                >
                  <item.icon className={`${item.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} size={24} />
                  <div className="text-3xl font-bold text-white mb-1">{item.value}+</div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
