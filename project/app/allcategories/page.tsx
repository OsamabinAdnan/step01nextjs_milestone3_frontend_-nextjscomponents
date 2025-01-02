import Link from 'next/link';

const categories = [
  {
    name: "Men's Fashion",
    slug: 'Men',
    image: '/mens-fashion.jpeg', // Add the path to the men's fashion image
  },
  {
    name: "Women's Fashion",
    slug: 'Women',
    image: 'womens-fashion.jpg', // Add the path to the women's fashion image
  },
  {
    name: "Kids Fashion",
    slug: 'Kids',
    image: '/kids-fashion.jpg', // Add the path to the Kid's fashion image
  },
  {
    name: 'Beauty Essentials',
    slug: 'Beauty',
    image: '/beauty.jpg', // Add the path to the Beauty image
  },
  {
    name: 'Fitness & Sports',
    slug: 'Sports',
    image: '/sports.jpg', // Add the path to the sport image
  },
  {
    name: 'Electronics & Gadgets',
    slug: 'Electronics',
    image: '/electronics.png', // Add the path to the electronics image
  },
  {
    name: 'Home & Beyond',
    slug: 'HomeBeyond',
    image: '/homebeyond.jpg', // Add the path to the home and beyond image
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="sm:text-4xl text-xl font-bold tracking-tight mb-8">Our All Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="relative block h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-xl font-bold text-white">{category.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
