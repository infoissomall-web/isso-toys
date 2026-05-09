
    {
      name: 'Փափուկ խաղալիք  Արջուկ',
      price: '4450֏',
      image: '6945161490199.jpg',
    },
    {
      name: 'Plush Teddy Bear',
      price: '7500֏',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Kids Toy Set',
      price: '9800֏',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Soft Plush Collection',
      price: '4200֏',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-red-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold">ISSO TOYS</h1>
          <button className="bg-white text-red-600 px-5 py-2 rounded-xl font-semibold">
            Instagram
          </button>
        </div>
      </header>

      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">
            Լավագույն Խաղալիքներ
          </h2>
          <p className="text-xl">
            Տեսեք մեր խաղալիքների տեսականին և актуալ գները։
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-4xl font-bold mb-10">Խաղալիքների Տեսականի</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                <p className="text-red-600 font-semibold text-lg mb-4">
                  {product.price}
                </p>

                <button className="w-full bg-red-600 text-white py-3 rounded-xl">
                  Դիտել
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
