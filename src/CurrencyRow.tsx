import { FC } from "react"

type Props = {
  currencyOptions: string[],
  selectedCurrency: string,
  onChangeCurrency(e:React.ChangeEvent<HTMLSelectElement>): void,
  amount: number | string,
  onChangeAmount(e:React.ChangeEvent<HTMLInputElement>): void
}



function CurrencyRow ({currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount}: Props) {

  return (
    <div className="flex gap-5">
      <input 
      type = "number" 
      placeholder = "Type a number" 
      className = "input input-bordered input-warning w-full max-w-xs flex-none" 
      value = {amount}
      onChange={onChangeAmount}/> 

      <select 
      value = {selectedCurrency}
      onChange = {onChangeCurrency}
      className = "select select-warning w-full max-w-xs flex-1 w-64"> 
      {currencyOptions.map((option: string)=>
      <option key = {option} value = {option}>{option}</option>
      )}

      </select>
    </div>
  )
}

export default CurrencyRow
