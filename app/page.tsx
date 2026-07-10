import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturesGrid } from '@/components/features-grid';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Main Content */}
      <div className="space-y-32">
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Premium Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover what makes SoundWave the ultimate audio streaming platform
              </p>
            </div>
            <FeaturesGrid />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-20 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Simple Pricing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect plan for your listening needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Free',
                  price: '$0',
                  features: ['320kbps quality', '5 skips/hour', 'Standard ads', 'Web player'],
                  popular: false,
                },
                {
                  name: 'Pro',
                  price: '$9.99',
                  features: ['Lossless audio', 'Unlimited skips', 'No ads', 'All platforms', 'Offline download'],
                  popular: true,
                },
                {
                  name: 'Premium+',
                  price: '$14.99',
                  features: ['Hi-Res audio', 'Unlimited skips', 'No ads', 'All platforms', 'Offline download', 'Family sharing'],
                  popular: false,
                },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-8 space-y-6 ${
                    plan.popular
                      ? 'glass-strong border-2 border-primary glow-neon-blue scale-105'
                      : 'glass border border-border'
                  }`}
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-neon-blue hover:shadow-lg'
                        : 'bg-muted/30 text-foreground hover:bg-muted/50'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
