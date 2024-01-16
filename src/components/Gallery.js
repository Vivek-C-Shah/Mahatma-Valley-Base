import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [singleImage, setSingleImage] = useState(null);

  const API_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get(`${API_URL}/api/v1/get/images`);
      setImages(res.data);
      setFilteredImages(res.data);
    };

    const fetchCategories = async () => {
      const res = await axios.get(`${API_URL}/api/v1/get/categories`);
      setCategories(res.data);
    };

    fetchImages();
    fetchCategories();
  }, []);

  const handleCategoryClick = async (categoryId) => {
    if (categoryId === 'all') {
      setFilteredImages(images);
    } else {
      const res = await axios.get(`${API_URL}/api/v1/get/images?category=${categoryId}`);
      setFilteredImages(res.data);
    }
  };

  return (
    <div className="container my-3">
      <div className="row ">
        <div align="center">
          <button
            onClick={() => handleCategoryClick('all')}
            className="btn btn-primary filter-button"
            data-filter="all"
          >
            All
          </button>

          {categories &&
            categories.map((item) => {
              return (
                <button
                  onClick={() => handleCategoryClick(item._id)}
                  className="btn btn-default filter-button border mx-2"
                  data-filter="hdpe"
                >
                  {item.name}
                </button>
              );
            })}
        </div>

        <br />

        {filteredImages &&
          filteredImages.map((item) => {
            return (
              <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe my-4">
  <img
    src={`http://localhost:8000/${item.name}`}
    className="img img-responsive"
    height="300px"
    width="300px"
  />
</div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;