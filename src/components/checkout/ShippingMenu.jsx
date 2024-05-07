import { currencyFormat } from "@/utils";

function ShippingMenu({data, body, setBody, errMessage}) {
  return (
    <div className="w-72">
      <label className='block font-semibold text-lg'>Pilih Kurir Pengiriman :</label>
      {data.map((courier, i) => {
        const lowestCost = courier.costs.reduce((prev, current) => {
          return prev.cost[0].value < current.cost[0].value ? prev : current;
        });

        return (
          <div className="flex p-3 bg-primary-50 hover:bg-primary-100 rounded-md" key={i}>
          <input
            type="radio"
            id={lowestCost.service}
            name="shipping_cost"
            value={lowestCost.cost[0].value}
            onChange={() => setBody({ ...body, shipping_cost: lowestCost.cost[0].value, total_price: body.product_price + lowestCost.cost[0].value})}
          />
          <label htmlFor={lowestCost.service} className="pl-2 flex-1">
            <p className="font-medium">
              {courier.name ==='Jalur Nugraha Ekakurir (JNE)' ? 'JNE' : courier.name } ({currencyFormat(lowestCost.cost[0].value)})
            </p>
            <p className="text-sm font-normal">
              {lowestCost.cost[0].etd && `Estimasi tiba ${lowestCost.cost[0].etd} hari`}
            </p>
          </label>
        </div>
        );
      })}
      {
        errMessage ? <span className="text-red-500">{errMessage}</span> :
        <div>
          <span className="font-medium text-sm block mt-5 mb-2 text-gray-700">Berat Produk : {body.product_weight/1000} kg</span>
          <span className="font-medium text-sm block text-gray-700">Harga Produk : {currencyFormat(body.product_price)}</span>
          <span className="font-medium text-sm block text-gray-700">Ongkos Kirim : {currencyFormat(body.shipping_cost)}</span>
          <span className="font-semibold text-lg block mt-2">Total Tagihan : {currencyFormat(body.product_price + body.shipping_cost)}</span>
        </div>
      }
    </div>
  )
}

export default ShippingMenu