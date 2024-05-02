import { currencyFormat } from "@/utils";

function ShipmentOption({data, product, setProduct}) {
  return (
    <div className="w-64">
      <label className='block font-semibold text-lg'>Pilih Kurir Pengiriman :</label>
      {data.map((courier, i) => {
        const lowestCost = courier.costs.reduce((prev, current) => {
          return prev.cost[0].value < current.cost[0].value ? prev : current;
        });

        return (
          <div className="flex p-3 bg-blue-50 hover:bg-blue-100 rounded-md" key={i}>
          <input
            type="radio"
            id={lowestCost.service}
            name="shipment"
            value={lowestCost.cost[0].value}
            onChange={() => setProduct({ ...product, shipment: lowestCost.cost[0].value })}
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

      <span className="font-semibold text-lg block mt-5">Total Tagihan : {currencyFormat(product.price + product.shipment)}</span>
    </div>
  )
}

export default ShipmentOption