import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import OpenModalButton from './OpenModalButton';
import DeleteStockModal from './DeleteStockModal';
import { fetchStockDetails } from './actions'; // Replace with your actual action import

function StockDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { stockId } = useParams();
  const StockDetails = useSelector(state => state.stockDetails);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(fetchStockDetails(stockId));
  }, [dispatch, stockId]);

  return (
    <>
      {StockDetails && (
        <div className="details-wrapper">
          <header>
            <h1>{StockDetails.name}</h1>
            <h3>{`Price: ${StockDetails.price}`}</h3>
          </header>
          <div className="images-wrapper">
            <div id="preview-image-wrapper">
              <img src={StockDetails.StockImages?.find(image => image.preview)?.url} alt="Stock Preview" />
            </div>
            {StockDetails.StockImages?.map(image => !image.preview && (
              <div key={image.id}>
                <img src={image?.url} alt="Stock Image" />
              </div>
            ))}
          </div>
          <section>
            <h2>{`Owned by ${StockDetails.UserId.firstName} ${StockDetails.UserId.lastName}`}</h2>
            <p>{StockDetails.description}</p>
          </section>
          <div className="reserve">
            <div className="price">{`Price: $${StockDetails.price}`}</div>
            <button onClick={() => alert("Feature...")}>Reserve</button>
          </div>
          <div className="bar" />
          <div key={StockDetails.id}>
            <h3>{StockDetails.UserId.firstName}</h3>
            {sessionUser && sessionUser.id === StockDetails.UserId.id && (
              <OpenModalButton
                buttonText='Delete'
                modalComponent={<DeleteStockModal stockId={StockDetails.id} />}
                onModalClose={() => navigate(`/Stocks`)}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default StockDetails;
