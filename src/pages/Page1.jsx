import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Page1.module.css';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import ProductDetail from '../components/ProductDetail';

function Page1() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    // Women's Makeup Products
    { id: 1, name: 'Matte Lipstick', price: 599, img: '/newcomponent/Women/Matte_Lipstick.jpg', gender: 'women', category: 'lipstick' },
    { id: 2, name: 'Glossy Lipstick', price: 649, img: '/newcomponent/Women/Glossy_Lipstick.jpg', gender: 'women', category: 'lipstick' },
    { id: 3, name: 'Liquid Foundation', price: 899, img: '/newcomponent/Women/LiquidFoundation.jpg', gender: 'women', category: 'foundation' },
    { id: 4, name: 'Powder Foundation', price: 799, img: '/newcomponent/Women/PowderFoundation.jpg', gender: 'women', category: 'foundation' },
    { id: 5, name: 'Shimmer Eyeshadow Palette', price: 1299, img: '/newcomponent/Women/ShimmerEyeshadowPalette.jpg', gender: 'women', category: 'eyeshadow' },
    { id: 6, name: 'Matte Eyeshadow Palette', price: 1199, img: '/newcomponent/Women/MatteEyeshadowPalette.jpg', gender: 'women', category: 'eyeshadow' },
    { id: 7, name: 'Volumizing Mascara', price: 699, img: '/newcomponent/Women/VolumizingMascara.jpg', gender: 'women', category: 'mascara' },
    { id: 8, name: 'Waterproof Mascara', price: 749, img: '/newcomponent/Women/WaterproofMascara.jpg', gender: 'women', category: 'mascara' },
    
    // Unisex Skincare Products
    { id: 9, name: 'Hydrating Moisturizer', price: 699, img: '/newcomponent/Women/hydrating_mosturizer.jpg', gender: 'all', category: 'moisturizer' },
    { id: 10, name: 'Oil-Free Moisturizer', price: 749, img: '/newcomponent/Women/oilfree_mosturizer.jpg', gender: 'all', category: 'moisturizer' },
    { id: 11, name: 'Gentle Face Wash', price: 449, img: '/newcomponent/Women/facewash.jpg', gender: 'all', category: 'facewash' },
    { id: 12, name: 'Deep Cleansing Face Wash', price: 499, img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAD4APgDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAMEAgUGAQf/xABDEAACAgIAAwQGBQkHAwUAAAABAgADBBEFEiETMUFRBhQiYZGhIzJxgbEVJDNCcnOywdEWUmJjgqLwNDXSQ1NU4fH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAfEQEBAAIDAAMBAQAAAAAAAAAAAQIRAxIhMUFREyL/2gAMAwEAAhEDEQA/APrcREBERAREQEREBETFyQjkd4ViPuEDKYWW1Urz2uqL4FjrfuA75rTa6IztY51s65j134d/jNJZfbdezWOzEeyuySFXyG4HQNxjh4blDWt71rOv92pKnEMV9a7Xr5qP6zlAfpNaYnv0o2deevKbPHOzykMGA3phra71zDzEnab1v1dX5b0ZFZ7ub4CDkVgdQ3wExCprfZgDlB6jqOh6GYtWrWVkBeX2drrv31lRi/EcVPrdr9yj+sgPGuHhgv0+z/gGvxkgx6bVq5wh50uDFV11JHKR07xK2Ri8PRqj6tTyvlUU9FAOrWdOny+ECxbxjh1PJ2rWqG7j2ZIH28u5bpyMfITtKLVsTzU92/Md85DjLKX9gALzsFA6aUEgSGvJvxq0upco4HgTph5MB4QO6iabDzBm41V6O4DAhlLHaup0VP8AKbWli1VZJJJHf5+ECSIiAiIgIiICIiAiIgIiICIiAiIgIiICeEbBHn0nsQNLmezWo82YH7hOUu4zwTGysmnI4jjVXUNy3Vv2nMjFQ2iFU+B/5qdbxP2Rr/Mc/Fdz596TcNbiOHktjVqc3HYXV8ladtcg0HpV9c3UdQN9SNeMo2uNZjtxSjMva3I4VxDExqsY41rUpVarc62WHnVir83TX3g6m3rw83H4liPmZlRazHuNOMpr5gVbk5e00rP0Oz7I6+eunz3Ezs2rhlHC8q2+nJ7S/GXENJOV6sio1fKFrLb+t3b0AO6UMriRyMtcnKycuy1KaqarskWV7Stiqis9w0em9a2fPc4XixufbS3lsnV9vV3YaZifP7odmB5t+0NaP2dJy/AvSG7M4eEsqtOZirVXdkZKqtd3OWKMiq22PKBzHoN+e+l+7ib4GHfflJZkpjVMz+rhPWWFf1vZYhWYeI6H4TpeSS6rrjwZ5Yd5PFu3IyawQlhH1R0A/V7vCaDinpD+TBjLkX3WW3MDi4uPTXbfYam3zqGAAAP6xI+XTdZRVKmvtIppC87PkMtSINbPOznl2PHrPlefdf6QcYzqOE115N99t64uUW5FuwcagL6pjGwAH9ZiO8k+6W7jlJt1H5e4bxf2KGsTJrBeyi7si5XxZGpZkIG+uj08pcc/mw+ycM3o/wAZ4Jl8Ev4l2WGL8+paE7ZXvdSH2vJVvv0FI3+sJ3mRiZ1GEtt9DVVluUdo1YYsfAJzc3yiWLZYsejdrcnEqt9A9Vi/tMCp/ATtUXkRF/uqB8pxHouA12Yv958ff2AsZ3MrJERAREQEREBERAREQEREBERAREQEREBERA03GPZ5OhP1m0NAtpD0BPTr3T5tZ6SZq15135A4jRZSrMGywTQvtAAuVVW8dnXxn0njmwuKRvbM69PPU+SekfEnysi7h2K+8fHsb1plbQuvTqyj/Cn478hrWM3Uqhlca4nxHJtzWdMc14pxKRSXC01sDz8nMS222ebr7vdNzficNvw8XN4fxCvLqpxKvWDdzJdVYRyNUarB1XoeYbnMY/KKiXPUuxUKOY6PlqW+F8My+I8V4fhY5WlOIZC1XBx2orQKXa0oCBsAb6N98xnju/5uk3LNZO84NWmVw1Vx8yyg1X3M71lbLCykMqfSMqjnXYUbA2fjsswUeuUPRkXhMt6cRcGwI3MFV3tyCwct0Ghsgd2uu+nzfAy8nh3Fcvsr1uowsl0cg2LRlrTaQA6k9UOt9esn4lxfKsrxr6Uqx7sdMilrKAUa2vIZmbm5dd3MQPcfdPPlhez6WPPjNZe+a83+OiGL6P8AGs26/iN12S2IURca20rgUrz8nau5bmYnvK7Oh06zbZy+iw4bVkLlcKt9QY5fDVqy1qDXVaK0JRjNz6YDWgN7HXyHyK57LFcPYxVl0R3AL5ADp8p1vo36Znh+bUvFsfGyMWxVpszExqRnY/QKLWsrUOygaDeOuo2Rputxy/Xm/pjcrlrTccTybF4rXxXJtqx6cjB9Z9HvytWMj1FUdA2WaHduTmJUpsnoTrlK6FmrO/KmLXnFrrWvRiLLyzMACQVUN3DxGhrxntXAPRcPk5tfpDRnrY3ZUPkoc44+PXoJj1FCR7I0Cdb6AdNdaebVlvkUU4t1S8KqCWWA1NVkZT9dhlRiFTeiBzbOuo6dGOvpjK2/LpfRLTZWX3ezyE+4gN0M7acT6F1rXdnKo6JUh+0sx2TrxM7adHMiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgarjNV9tWN2KczrY57wANodb2R46/53cNm+j/ABtKsWjh3Bw30AxsnJ9bxq7PVlZiKKw52ASxLDfUDW+u59HyR9GD5Ov8xI07hLKlfIj6F+lRsLNgqNnrvKocA771XmAAPfqbDhvo36TcLyL8+vDd8mjCy68GtLcQBsrIrakPY7WgBU3zdxJ1qfTmkZk0kj4vV6E+mlFQb8n1WXFdgDMx9K29dQzAb+MsN6HemDVms8OUgqFJ9bxvLv8Arz6/PI19t7fEv7DenWyRwyrWgNHLxd9P9epi3oP6dEf9rTr5ZuH/AOc+3zya2y+Wej3o76Y8NXIxMrhKjHutN62pmYpNdnIFIZQxJDaGtdx+3p0R4TmKgBw8jmLAufWMf2hs93Tp01593v6deZBZ49ZL6qj6L4eRjXcUaylqkdccVB7EsbQLb2U0PlOolDhw9m9vN1X4Df8AOX5AiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgQ5A+hf3cp+BEhQ9BLFw3VaP8B+XWVaj0EokMjMzMwMI8nk9nkKTGezwwMGMrue+TtK7+Mg2PDhqhz52t8lAl2VcAfmtZ82sP+4iWoCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB4w2rjzVh8pQq+qJsJrq+mx5Ej5wJjK1i2Nbr1h6+dNVpX2ZIAGmflZSSd+Ox/WxKtlWR6w11VqKtlKVOGr5nTkLENWdgb6nvB84EePkaqQZN1XagW717O1rLAsxHTuG/CSm/HHKDYoLfVB5gT9xG/wD998jOJjqCVWzfcAr611Q/rdO9VJ+z7pF6v2tuQ7LbrmVRu4ghgvtsDrfXYH+n4BNZl0rWzVMllhUdiinfaO7BEA+0kfd9uzXxCxsftLix5rFrDN1sIJD2a8iQdfZ0kgxwljMlL7DIVcXDbcqqu+o33dO/w6a3MqqQlgs7NgSnLtnDEAAKAen/ADUCRpWfvMtsOhlOzpuBuMMAY1H7JPxJMsSLGGsfGHlVX+AksBERAREQEREBERAREQEREBERAREQEREBERATWlkra0uyqq2NsuwUDr5t0mymk4qFFd/MCVXJosYBS+1319kAnx8oFk5OGrWVtlYy2VqGsRr6gyKSAC6ltgdR3+fvnouofk5La351DJyOrcy/3ho905i/ajjasyraz8OcVnBtexVV8dWta8DTL0+p/hJ8em6xwbHpdGrdBRjsbBS1HP7J6pUR7O/LwgWHycNLLKXycdba6jfZW11YdKgNmx1J2FHnD5GJWaVsyKEa7l7FXtrVreY6HIpOzvw1Oc4k2ILPSepsS6zPsq4tkYlq0uVpqbhyVc7PrRD/AFFHXr4CZV52JbxLgdyXBaU4bTQ5twchy91Vx5qVLoCp8ebXh74HR9rUd6sQ6fsjplOn/uHR7/dPBdQSii6os++QB1JbR0SBuaPh5sah1au1GufGyl7RdcxtR+o+3Q/oJlWK1vwyyO1hZeZWrPLpWuIsrdeoKb9oHodwN0HrcbR0YEAgoysNMNg9D4+Eq2kHZBBHhrrKGCrjCqIUhmxcFAOUg9Mfu0ZaGjWNAaPdrejvx6wOirGq6x5Io+AEyng6ADyAE9gIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICUbumQ/vCn5S9KWR0vHvRfxMAC3gT07uplVmt3a7vkMiN2ailUHM4OmZQu21voNnw98tTzQA0AAPIe/rAgOQqgjVxC83UV2EkrruAHefDumD5DcmRYHKqgSsc/MCLDrZbflsfD3yxMWCtsEAjYOiAeo6joYFc3sRWxS0aaxmRAXfQY1pzAefefLXxesK7rydtyKbQ5Fb8rFdKB3fb8JNpAWIABbRYgdW+2ewPGPvlVvasT3uo+Yk7npIE/TUjztrH+4QN9ERAREQEREBERAREQEREBERAREQEREBERAREQEpZX6Wo+afgZdlPL+vQfcw+YgYjuiBPDKKuXkGitmXexrejrvYAbYdw9+teZA2ZRU5oU2tV7A8NAEqDs/qnvCa8R9J0YqQUtZY/Rt/dbmGt7B5Su15fa8dHRHQnZ10MxvpC8/ONAFtA+1oAk6A6+B+BPcNyCLGussHLYG5l9lmZbAecdG+uPMN+se4d+wTYmsxEBuZ1VQoYa5a6gPZUJ0YUKfA66932zZEwI3MjqG78f8AfV/xAzNjMaOuRj/vV/GBvIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAlTM76D72/lLcqZvdR+034QMUHSesIr7pm0qK1lSupVhsEaI8D9o/59/dKT4IPTe12rEMdqSDvRB9nrtgfZ8fd02JkbQK9VKUrodToAtrqdADr4+A3sn+mRMzMjaFYMZ7jdcnH/AGx+BmBmeKPznH/b/kYG7iIkCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAlTO+rT+2f4ZblXN/R1H/NHzUwMK+6SHukVfd8JKf8A6lREZGfGe9tjkqq3UFmsapQLayWsX6yKAerDxEj7XHYArfQwYOVK3VEEJ9cghu5f1vKB4TIzDXY4Cnt6NMeVT2tftHp0Gj39R8Z40DAyTE/6rH/ab+EyIybDH51T/r/hMitzERAREQEREBERAREQEREBERAREQEREBERAREQEq5v6JP3q/gZalbN/RL+8T8DAp5FuTTi32YtIvyFCdnUQTz7dQeikHoNnv8ACVzxLiKrWRwvI5xXcbW5LBXVar6rXQ2zLyhmYrvwA6t0tvemPV2rrYyhlUipeZuuzvU8XOodlUpbXzbINigKAE7QlipIGvfKNGMerkzObh+c1da011oHuAyccMnRQ6BlVSo0PrbHU6OzCaFsZRZw3O5rTVQ7WXDkXvpDPyVA+xroQACNE7J1N6vEMGw18th+kKKvMpXqw3o83l3HyJ14yOzPwkNytYQabHqcFD9Zd7A1566QrSpUFFYHDLw1K4dq9lZZzFq6LbFDPagBC75WHfs+4CW2zswqxGBaSGyQdLbyqE6VbBHMeYg70Og15y9blY9Z0zE+yj7QBwFckAnlO/Anu7pE2VVyqwDsGLBeXkPRddW9roOo74R5U9j1o9icjtzbXTDoGIB03tDY0dHqN68Jcwf+pX3I5+UqpYtnPy79huU9OhOgdqe4j3y5gD84J8q3/lINrERAREQEREBERAREQEREBERAREQEREBERAREQErZv6EfvE/nLMhyUayoqvVgVYDz14QK9XhJTIKTsAg7HmOo+Un30lRE4B3sAg73sA735yq9LmwWLk3qA62dmvZdmSOmjteb5y20jMCA8q60AOmugAke5lZuRgGRXplrh4+mc+VZ+bCVjLnD0bdluvYZQqnY6kHrqBsIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAjyiIHHg2V2WcjMhDuPZJHifKWVzM4a+nsP7RDfxAyCwauvH+bZ/EZ6IFn17N/wDcH311/wBJ4c3M3+kXX7uv+kggwJjk5Dd7j7lQfygWWHvdvj/SQiSLAz6nvJPxm8wRrFo94Y/FiZpJvsQAY2P+7U/HrAmiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiByt41kZP763+IzwTPM2mVkhhom2xhvpsFiQRuQ84gSTwzDtBMTYPOBJJFlcOJKriBNOgxxqjHHlUn8InNdoCQo2Wboqr1Zj5ADrOoQEJWD3hFB+0DUDKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIGD11WDlsRHXydQw+cqWcJ4ZZ17DkP8AlO6fJTr5RECs3AcI75bspfsdCP8Acsw/s9j/APysr4Vf+MRAzXgGGPrX5Tfa1Y/BJYr4Tw1P/SZ/3ljt8t6+URAt10Y9P6KqtP2FA+YEkiICIiAiIgIiICIiAiIgIiIH/9k=', gender: 'all', category: 'facewash' },
    { id: 13, name: 'Vitamin C Serum', price: 899, img: '/newcomponent/Women/VitaminCSerum.jpg', gender: 'all', category: 'serum' },
    { id: 14, name: 'Hyaluronic Acid Serum', price: 999, img: 'https://www.bing.com/th/id/OIP.wyqslLhXw1fDoCCRjRWzZgHaLW?w=143&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7', gender: 'all', category: 'serum' },
    
    // Men's Specific Products
    { id: 15, name: 'Beard Oil', price: 599, img: '/newcomponent/Women/BeardOil.jpg', gender: 'men', category: 'beardcare' },
    { id: 16, name: 'Beard Wash', price: 449, img: '/newcomponent/Women/BeardWash.jpg', gender: 'men', category: 'beardcare' },
    { id: 17, name: 'Shaving Cream', price: 299, img: '/newcomponent/Women/ShavingCream.jpg', gender: 'men', category: 'shaving' },
    { id: 18, name: 'After Shave Balm', price: 399, img: '/newcomponent/Women/AfterShaveBalm.jpg', gender: 'men', category: 'shaving' },
    
    // Fragrances
    { id: 19, name: 'Floral Perfume', price: 1599, img: '/newcomponent/Women/Floral_Perfume.jpg', gender: 'women', category: 'perfume' },
    { id: 20, name: 'Woody Perfume', price: 1699, img: '/newcomponent/Women/Woody_Perfume.jpg', gender: 'men', category: 'perfume' },
    { id: 21, name: 'Fresh Body Spray', price: 399, img: '/newcomponent/Women/Fresh_Body_Spray.jpg', gender: 'women', category: 'bodyspray' },
    { id: 22, name: 'Sport Body Spray', price: 399, img: '/newcomponent/Women/Sport_Body_Spray.jpg', gender: 'men', category: 'bodyspray' },
    
    // Hair Care Products
    { id: 23, name: 'Volumizing Shampoo', price: 449, img: 'data:image/jpeg;base64,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', gender: 'all', category: 'shampoo' },
    { id: 24, name: 'Anti-Dandruff Shampoo', price: 499, img: 'https://www.bing.com/th/id/OIP.koAPYJ1FLwW_b9zwqFl-xQHaHa?w=205&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7', gender: 'all', category: 'shampoo' },
    { id: 25, name: 'Moisturizing Conditioner', price: 399, img: '/newcomponent/Women/Moisturizing_Conditioner.jpg', gender: 'all', category: 'conditioner' },
    { id: 26, name: 'Repair Conditioner', price: 449, img: '/newcomponent/Women/Repair_Conditioner.jpg', gender: 'all', category: 'conditioner' },
    
    // Additional Makeup Products
    { id: 27, name: 'Liquid Eyeliner', price: 399, img: '/newcomponent/Women/LiquidEyeliner.jpg', gender: 'women', category: 'eyeliner' },
    { id: 28, name: 'Pencil Eyeliner', price: 299, img: '/newcomponent/Women/PencilEyeliner.jpg', gender: 'women', category: 'eyeliner' },
    { id: 29, name: 'Cream Blush', price: 499, img: '/newcomponent/Women/CreamBlush.jpg', gender: 'women', category: 'blush' },
    { id: 30, name: 'Powder Blush', price: 549, img: '/newcomponent/Women/PowderBlush.jpg', gender: 'women', category: 'blush' }
  ];

  const addToCart = (product) => {
    try {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        cartItems[existingItemIndex].quantity += 1;
      } else {
        cartItems.push({
          ...product,
          quantity: 1
        });
      }
      
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesGender = selectedGender === 'all' ? true :
                         selectedGender === 'men' ? (product.gender === 'men' || product.gender === 'all') :
                         selectedGender === 'women' ? (product.gender === 'women' || product.gender === 'all') :
                         false;
    return matchesCategory && matchesGender;
  });

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          
          <h1>Welcome to KosmoCare</h1>
        </div>
      </header>

      <section className={styles.hero}>
        <img src="/img-2.jpg" alt="Hero Visual" />
        <div className={styles.heroText}>
          <h2>Beauty Redefined</h2>
          <p>Discover the finest beauty essentials curated just for you.</p>
        </div>
      </section>

      <Filter 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
      />

      <main className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imgWrapper} onClick={() => setSelectedProduct(product)}>
              <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <p className={styles.price}>₹{product.price}</p>
              <button 
                className={styles.btn}
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </main>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}
      <Footer/>
    </div>
  );
}

export default Page1;