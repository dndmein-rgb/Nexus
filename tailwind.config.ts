import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'glow': '0 0 20px rgba(260, 95%, 56%, 0.3)',
  			'glow-lg': '0 0 40px rgba(260, 95%, 56%, 0.4)',
  			'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
  			'card-hover': '0 12px 32px rgba(0, 0, 0, 0.12)',
  		},
  		backgroundImage: {
  			'gradient-nexus': 'linear-gradient(135deg, hsl(260, 95%, 56%) 0%, hsl(200, 100%, 50%) 100%)',
  			'gradient-accent': 'linear-gradient(135deg, hsl(280, 85%, 55%) 0%, hsl(320, 81%, 43%) 100%)',
  		},
  		animation: {
  			'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'float': 'float 3s ease-in-out infinite',
  			'shimmer': 'shimmer 2s infinite',
  		},
  		keyframes: {
  			'pulse-glow': {
  				'0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(260, 95%, 56%, 0.3)' },
  				'50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(260, 95%, 56%, 0.5)' },
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-10px)' },
  			},
  			'shimmer': {
  				'0%': { backgroundPosition: '-1000px 0' },
  				'100%': { backgroundPosition: '1000px 0' },
  			},
  		},
  		spacing: {
  			'safe': 'max(1rem, env(safe-area-inset-bottom))',
  		},
  		screens: {
  			'xs': '320px',
  			'sm': '640px',
  			'md': '768px',
  			'lg': '1024px',
  			'xl': '1280px',
  			'2xl': '1536px',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
