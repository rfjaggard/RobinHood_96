import OpenModalButton from "./OpenModalButton";
import DeleteStockModal from "./DeleteStockModal";

function StockDetails() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { stockId } = useParams();
    const StockDetails = useSelector();

    useEffect(() => {
        dispatch(fetchStockDetails(stockId))
      }, [dispatch, stockId])
    
      return (
        <>
          {StockDetails &&
            <div className="details-wrapper">
              <header>
                <h1>{StockDetails.name}</h1>
                <h3>{`${StockDetails.balance}`}</h3>
              </header>
              <div className="images-wrapper">
                <div id="preview-image-wrapper">
                  <img src={StockDetails.StockImages?.find(image => image.preview)?.url} />
                </div>
                {StockDetails.StockImages?.map(image => {
                  if (!image.preview) {
                    return (
                      <div key={image.id}>
                        <img src={image?.url} />
                      </div>
                    )
                  }
                })}
              </div>
              <section>
                <h2>{`Owned by ${StockDetails.UserId.firstName} ${StockDetails.UserId.lastName}`}</h2>
                <p>{StockDetails.description}</p>
              </section>
              <div className="reserve">
                <div className="price">{`$${StockDetails.price}`}</div>
                <button
                  onClick={() => alert("Feature...")}
                >Reserve</button>
              </div>
    
              <div className="bar" />
    
                    return (
                      <div key={StockDetails.id}>
                        <h3>{stockId.UserId.firstName}</h3>
                        {sessionUser && sessionUser.id === stockId.userId &&
                          <OpenModalButton
                            onModalClose={() => navigate(`/Stocks`)}
                          />
                        }
                      </div>
                    )
              </div>
          }
        </>
      )
    }
    
    export default StockDetails;