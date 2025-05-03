import React from 'react';
import styles from './Filter.module.css';

function Filter({ selectedCategory, setSelectedCategory, selectedGender, setSelectedGender }) {
  const getRelevantCategories = () => {
    const baseCategories = [
      { id: 'all', name: 'All Products' },
      // Shared Categories
      { id: 'moisturizer', name: 'Moisturizer', gender: 'all' },
      { id: 'facewash', name: 'Face Wash', gender: 'all' },
      { id: 'serum', name: 'Serum', gender: 'all' },
      { id: 'sunscreen', name: 'Sunscreen', gender: 'all' },
      { id: 'toner', name: 'Toner', gender: 'all' },
      { id: 'shampoo', name: 'Shampoo', gender: 'all' },
      { id: 'conditioner', name: 'Conditioner', gender: 'all' },
      { id: 'hairoil', name: 'Hair Oil', gender: 'all' },
      { id: 'perfume', name: 'Perfume', gender: 'all' },
      { id: 'bodyspray', name: 'Body Spray', gender: 'all' },
      
      // Women's Categories
      { id: 'lipstick', name: 'Lipstick', gender: 'women' },
      { id: 'foundation', name: 'Foundation', gender: 'women' },
      { id: 'eyeshadow', name: 'Eyeshadow', gender: 'women' },
      { id: 'mascara', name: 'Mascara', gender: 'women' },
      { id: 'blush', name: 'Blush', gender: 'women' },
      { id: 'concealer', name: 'Concealer', gender: 'women' },
      { id: 'highlighter', name: 'Highlighter', gender: 'women' },
      { id: 'eyeliner', name: 'Eyeliner', gender: 'women' },
      
      // Men's Categories
      { id: 'beardcare', name: 'Beard Care', gender: 'men' },
      { id: 'shaving', name: 'Shaving', gender: 'men' }
    ];

    if (selectedGender === 'all') {
      return baseCategories;
    }

    return baseCategories.filter(category => 
      category.id === 'all' || 
      category.gender === 'all' || 
      category.gender === selectedGender
    );
  };

  return (
    <div className={styles.filterSection}>
      <div className={styles.genderFilter}>
        <button 
          className={`${styles.genderButton} ${selectedGender === 'all' ? styles.active : ''}`}
          onClick={() => setSelectedGender('all')}
        >
          All
        </button>
        <button 
          className={`${styles.genderButton} ${selectedGender === 'women' ? styles.active : ''}`}
          onClick={() => setSelectedGender('women')}
        >
          Women
        </button>
        <button 
          className={`${styles.genderButton} ${selectedGender === 'men' ? styles.active : ''}`}
          onClick={() => setSelectedGender('men')}
        >
          Men
        </button>
      </div>

      <div className={styles.filterContainer}>
        {getRelevantCategories().map(category => (
          <button 
            key={category.id}
            className={`${styles.filterButton} ${selectedCategory === category.id ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;