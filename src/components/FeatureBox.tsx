interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureBoxProps {
  features: Feature[];
  heading?: string;
}

export default function FeatureBox({ features, heading }: FeatureBoxProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {heading && (
          <h2 className="text-3xl font-black text-center text-[#1a1a1a] mb-12">{heading}</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
