import './mylabel.css';
import {ProductButtons,ProductCard,ProductImage,ProductTitle} from 'jpg-product-card'



const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: '../../public/coffee-mug.png'
}

export interface MyProductCard {
  count:number,
  maxcount:number
  color:string
  shadow?: React.CSSProperties,
  background?: React.CSSProperties
  background2?: React.CSSProperties
  estilofinal?: React.CSSProperties
  
}


export const MyProductCard = ({
    count = 6,
    maxcount = 10,
    color='rgba(250,11,0,0.2)',
    shadow={boxShadow: '100px 100px 10px rgba(250,250,0,0.2)'} ,
    background={backgroundColor: color  } ,
    background2={backgroundColor: color  } ,
    estilofinal={...shadow,...background2}
}: MyProductCard) => {
  return (
    <div className="App App-header">
            <ProductCard 
                key={ product.id }
                product={ product }
                initialValues={{
                    count: count,
                    maxCount: maxcount,
                }}
                // style={{ color: fontColor, backgroundColor }}
                style={shadow} 
            >
                {
                    ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
                        <>
                            <ProductImage/>
                            <ProductTitle/>
                            <ProductButtons style={estilofinal}/>
                            {count}
                        </>
                    )
                }
            </ProductCard>


    </div>
  );
}
