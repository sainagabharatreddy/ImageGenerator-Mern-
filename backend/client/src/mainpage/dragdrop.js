import React, { useState, useRef } from 'react';
import './upload.css';
import Footer from './footer';
import Experience from './experience'
import Design from './designs'




const FileUploader = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [category, setCategory] = useState('');
  const [jsonImages, setJsonImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    if (uploadedImage && category) {
      setLoading(true);

    
      setTimeout(() => {
        const sampleJsonData = [
          { id: 'kitchen1', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2Fxe2e4Tg6s6rveIAqHF28TenBrocS32vYJQZM9OpEFdyMkIkGB%2Foutput_1.png&signature=f66056d583abd64b22619862d644d90afcf8d77a330f8c0c6e6cc983490f8a26&watermark=true&width=1024' },
          { id: 'kitchen2', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2F240ShWc1jcIhD9q3s1d394ErwE4XilvVTn3QrFYeYvg3Gh0IA%2Foutput_1.png&signature=5065003eaaf4870227e41ad298d6882fe6dc8d1d6bc8eb76a6e90891f1424e9e&watermark=true&width=1024' },
          { id: 'kitchen3', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2F3H7vd8SRc5YzB1sbBSbsugAeSlLPP2nHYfbhe9P0YMMrbESjA%2Foutput_1.png&signature=98a914287d3cd74927186455c1612b3bb2fab8e43252edfa472f9866566d9c40&watermark=true&width=1024' },
          { id: 'kitchen4', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2F5I7cYD78fgwEXaJ8flEMBenlGi1YykCezVJT77YZjNLetRINC%2Foutput_1.png&signature=3bbf58940a6b325b49decb464c2ae70c4f0466c47f76568ff1689192e81ffb8c&watermark=true&width=1024' },
          { id: 'kitchen5', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FYsvqFLSZcfQfeJI0gqBsy3PwtXePCfCXn7pxgpNP0hIjuRINC%2Foutput_1.png&signature=d89bb560bf915fa60a315017086bde932cbdf6cd5bbf2ed4d8710f03e9f2c7be&watermark=true&width=1024' },
          { id: 'kitchen6', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FTNmQvq4CfUQYKKi8fe6xkuZzlIMYnvCf4JoPWoS9KV812IkGB%2Foutput_1.png&signature=38c99bb19e178982034b9b3f0da581f2ced673699b03eda7b5870c96e182c730&watermark=true&width=1024' },
          { id: 'livingroom1', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2F6cbHxMWoK65kGZs9Ga98kc2ifGZfPvrKlQa6nk1ZD8WGvBpRA%2Foutput_1.png&signature=8e60b01986290bed4935f082a7726dbbc4e5f3aaf3c4e94774ee86823ceb0434&watermark=true&width=1024' },
          { id: 'livingroom2', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FJLkYYEqDMSIgMRzAKuz2gcanOgY1PRIkV3K4TErEsKdvbQaE%2Foutput_1.png&signature=b78980776c98b9b4715db8371cf6c405588e8e51c1add3c024a92dc1b30e3964&watermark=true&width=1024' },
          { id: 'livingroom3', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FPT9BG63luRI9AtvYqezytQzowLQsTqeaZNFxJfRTqhpadDSjA%2Foutput_1.png&signature=219f76e2e12970505bd0f711640fe675a98c5592f770bcd6d3980ce8ce3139e1&watermark=true&width=1024' },
          { id: 'livingroom4', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FTA5QwBBHBNJGMtCqFWksDyP0iNu9ZI2hNPa3o79vfBva3g0IA%2Foutput_1.png&signature=7960e0a9d64eae76883031462b1a31efb5ffea109bd9cdceed085464e5d8f154&watermark=true&width=1024' },
          { id: 'livingroom5', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FaWtHONCb2pLQKRFy00XsHuSaORULxKcOmM7uuByhDMrzbQaE%2Foutput_1.png&signature=9953dcf4244841fb7881c1e6d449cbc6cb038171305ee7b1bb8d52b5df7cefd3&watermark=true&width=1024' },
          { id: 'hall', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FYWN3e38o5CSWBS9qeK61vIyEqIxsSyIauZMexNYEKZeMkHkGB%2Foutput_1.png&signature=7b2af0e871bb07fd1c50657cfa2464fe6e36a3ce7db05b4e35d691e7ce0c5998&watermark=true&width=1024' },
          { id: 'hall', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2F4Y6CIrNeoQWKQCowMnDfQMZwUmyFJ2hgTsAfFOsPHVGWyDSjA%2Foutput_1.png&signature=363c78f268e8f617e190b9c0e1e0877a842e296a2aac536be8b3050d7a2e06ed&watermark=true&width=1024' },
          { id: 'hall', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FGHu5Kbz2sK4xAdRc1fFblOPrs94acBTfY8MidNZf44q5yDSjA%2Foutput_1.png&signature=0df297ce0a941da0f02c43ca15ff1440c898ebfe98191aacd87f97f6840f2a94&watermark=true&width=1024' },
          { id: 'hall', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2Fp0FePwNpWwRZBCYdGYm9Pz0JtFffY0KI1QIybXVepaGQlHkGB%2Foutput_1.png&signature=5ccd9449f53c69365c908dea31bbb123c620d1447a9d6594f5f7648225cccf10&watermark=true&width=1024' },
          { id: 'bathroom2', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FwvkEXQPI7GZlOxvPwSS79q0nccOma4HOOMyQ5DxK6BbsgQaE%2Foutput_1.png&signature=e8c8a0aa206d03ca1c745c13a2e5901693db47d9005458ab1487da56cce0ad67&watermark=true&width=1024' },
          { id: 'bathroom3', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FaLbD4T7XyQJkDJ5KLVMeZavw6ze2pp1WzOR41KW4xDSqCCpRA%2Foutput_1.png&signature=16ab832f0d2bd9a7060d986a76d073268172f86a2845283035ee073d39e67315&watermark=true&width=1024' },
          { id: 'bathroom1', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FNO1napaTtXLoBxeNTFruXzwwrM4WHvmr3ROzWclrIKDDCh0IA%2Foutput_1.png&signature=07ad5a9d3854653af9dfcb4ecf20aa712d22b998b30684c26c3eea32427129af&watermark=true&width=1024' },
          { id: 'bathroom2', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FDie3Rl092ej9a0phC2n035KoDVg2hOmaWMy1loQKuvYDGCpRA%2Foutput_1.png&signature=c868cf2267504b73d19ebb9f37431dce3169848216105a5793a246c9d74ffd2c&watermark=true&width=1024' },
          { id: 'bathroom3', url: 'https://resize.roomai.com/?format=auto&image=https%3A%2F%2Fpbxt.replicate.delivery%2FSXCmSBqDYIYMF1eqpHMfKTxMt7l8eFKQrbTSFZV2HV84LESjA%2Foutput_1.png&signature=e08d2c3797efcc5cb30bf0a178d78bc545d22adac430574478856091af72b55f&watermark=true&width=1024' },
          { id:'home' , url:'https://cdn.archi.ai/my7tgvV4VARVAlf.png'},
          { id:'home1' , url:'https://cdn.archi.ai/UhFvA9psWvjOaSKFN1w9.png'},
          { id:'house' , url:''},
          { id:'house' , url:''},
        ];

        const filteredImages = sampleJsonData.filter(
          (image) => image.id.startsWith(category)
        );
        setJsonImages(filteredImages);
        setLoading(false);
      }, 4000);
    }
  };

  return (
    <>
  <div className='hom'>
    <div className='main-container'>

      <div className="file-uploader">
        <div className="drop-zone">
          {loading ? (
            <p>Generating Images...</p>
          ) : (
            <>
              <p className='ppp'>Drag & Drop a file here or use the file input below:</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                style={{ display: 'none' }}
                ref={fileInput}
              />
              <button onClick={() => fileInput.current.click()}>Upload Image</button>
            </>
          )}
        </div>
        <div className="text-input">
          <input
            type="text"
            placeholder="Enter category (e.g., kitchen, bedroom)"
            value={category}
            onChange={handleCategoryChange}
          />
        </div>
        <div className="submit-button">
          <button onClick={handleSubmit} disabled={loading}>
            Submit
          </button>
        </div>
      </div>
      <div className="image-preview">
        {uploadedImage && (
          <>
            <h2>Uploaded Image</h2>
            <img src={uploadedImage} alt="Uploaded" />
          </>
        )}
      </div>
      {loading && (
    <p className='log'>Generating Images...</p>
  )}
<h2>Generated Images</h2>
      <div className="json-images">
        {jsonImages.length > 0 && (
          <>
          

          
            {jsonImages.map((image) => (
              <img key={image.id} src={image.url} alt={`kmage ${image.id}`} />
            ))}
          </>
        )}
        {jsonImages.length === 0 && uploadedImage && category && !loading && (
          <p>No matching images found for the category: {category}</p>
        )}
      </div>
          
           <Design/>
          <Experience/>
          <Footer/>
         

      </div>

      </div>
    </>
  );
};

export default FileUploader;
