import { useState, useContext } from "react";
function ProductForm({ product }) {
  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });
    return {
      id: variant.node.id,
      title: variant.node.title,
      handle: variant.node.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductForm;
