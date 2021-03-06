import PropTypes from "prop-types";
import React from "react";
import { Badge } from "reactstrap";
import { capitalizeFirstLetter } from "utils/common";

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  showDeleteModel: PropTypes.func.isRequired,
  showUpdateModel: PropTypes.func.isRequired,
  showViewModel: PropTypes.func.isRequired,
  page: PropTypes.number,
};

ProductItem.defaultProps = {
  showDeleteModel: null,
  showUpdateModel: null,
  showViewModel: null,
  page: 0,
};

function ProductItem(props) {
  const {
    index,
    product,
    showDeleteModel,
    showUpdateModel,
    showViewModel,
    page,
  } = props;

  const handleShowDeleteModel = (product) => {
    if (!showDeleteModel) return;
    showDeleteModel(product);
  };

  const handleShowUpdateModel = (product) => {
    if (!showUpdateModel) return;
    showUpdateModel(product);
  };

  const handleShowViewModel = (product) => {
    if (!showViewModel) return;
    showViewModel(product);
  };

  return (
    <tr>
      <td style={{ verticalAlign: "middle" }}>
        <Badge className="bg-secondary">{index + 1 + (page - 1) * 8}</Badge>
      </td>
      <td>
        <Badge className="bg-dark">{product.name}</Badge>
      </td>
      <td>
        <img
          width={58}
          height={58}
          src={`${process.env.REACT_APP_API_URL}/${product.images[0]}`}
          alt={product._id}
        />
      </td>
      <td>
        <Badge style={{ backgroundColor: "deeppink" }}>
          {capitalizeFirstLetter(product.category.name)}
        </Badge>
      </td>
      <td className="ps-4">
        <Badge style={{ backgroundColor: "cyan" }}>
          {product.quantityStock}
        </Badge>
      </td>
      <td>
        <Badge className="bg-warning">{product.originalPrice}$</Badge>
      </td>
      <td>
        <i
          onClick={() => handleShowViewModel(product)}
          className="zmdi zmdi-eye text-primary"
        />
        <i
          onClick={() => handleShowUpdateModel(product)}
          className="zmdi zmdi-edit text-success ps-3"
        />
        <i
          onClick={() => handleShowDeleteModel(product)}
          className="zmdi zmdi-delete text-danger ps-3"
        />
      </td>
    </tr>
  );
}

export default ProductItem;
