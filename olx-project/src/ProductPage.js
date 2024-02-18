import React, { useState } from 'react';
import './ProductPage.css';

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([
    { id: 1, name: 'VogueVista Couture', imageUrl: 'https://m.media-amazon.com/images/I/51NC6Kzct7L._AC_UY1100_.jpg' },
    { id: 2, name: 'UrbanUrbane', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgV8p9iXgon6Wo_fhXR147iq0I0ATY3pztA&usqp=CAU' },
    { id: 3, name: 'ThreadTreasure', imageUrl: 'https://m.media-amazon.com/images/I/51NC6Kzct7L._AC_UY1100_.jpg' },
    { id: 4, name: 'VintageVogue', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgV8p9iXgon6Wo_fhXR147iq0I0ATY3pztA&usqp=CAU' },
    { id: 5, name: 'ArtisanAura', imageUrl: 'https://m.media-amazon.com/images/I/51NC6Kzct7L._AC_UY1100_.jpg' },
    { id: 6, name: 'BelleBliss', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgV8p9iXgon6Wo_fhXR147iq0I0ATY3pztA&usqp=CAU' },
    { id: 7, name: 'ModMosaic', imageUrl: 'https://m.media-amazon.com/images/I/51NC6Kzct7L._AC_UY1100_.jpg' },
    { id: 8, name: 'PoshPulse', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgV8p9iXgon6Wo_fhXR147iq0I0ATY3pztA&usqp=CAU' },
    { id: 9, name: 'EleganceEra', imageUrl: 'https://m.media-amazon.com/images/I/51NC6Kzct7L._AC_UY1100_.jpg' },
    { id: 10, name: 'VelvetVine', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgV8p9iXgon6Wo_fhXR147iq0I0ATY3pztA&usqp=CAU' },
    { id: 11, name: 'MysticMood', imageUrl: 'https://m.media-amazon.com/images/I/51NC6Kzct7L._AC_UY1100_.jpg' },
    { id: 12, name: 'EtherealEssence', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgV8p9iXgon6Wo_fhXR147iq0I0ATY3pztA&usqp=CAU' },
    { id: 13, name: 'PrismPalette', imageUrl: 'https://m.media-amazon.com/images/I/51NC6Kzct7L._AC_UY1100_.jpg' },
    { id: 14, name: 'CoutureCanvas', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgV8p9iXgon6Wo_fhXR147iq0I0ATY3pztA&usqp=CAU' },
    { id: 15, name: 'Creations', imageUrl: 'https://m.media-amazon.com/images/I/51NC6Kzct7L._AC_UY1100_.jpg' },
    { id: 16, name: 'ChicCascade', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgV8p9iXgon6Wo_fhXR147iq0I0ATY3pztA&usqp=CAU' },
  ]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      <h2>Product Page</h2>
      <input
        type="text"
        placeholder="Search for products by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="product-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
