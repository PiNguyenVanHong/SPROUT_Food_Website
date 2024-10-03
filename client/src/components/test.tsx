import { Minus, Plus, X } from 'lucide-react'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface ShoppingCartProps {
  items: CartItem[]
  isPopup?: boolean
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemoveItem: (id: string) => void
}

export default function ShoppingCart({ items, isPopup = false, onUpdateQuantity, onRemoveItem }: ShoppingCartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`bg-white ${isPopup ? 'p-4 shadow-lg rounded-lg' : 'p-6'}`}>
      <h2 className="text-xl font-semibold mb-4">My shopping cart</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className={`relative ${isPopup ? 'w-16 h-16' : 'w-24 h-24'}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-medium">{item.name}</h3>
              <div className="flex items-center mt-2">
                <button
                  className="h-8 w-8 flex items-center justify-center border border-gray-300 rounded-md"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                  className="w-12 h-8 text-center mx-2 border border-gray-300 rounded-md"
                />
                <button
                  className="h-8 w-8 flex items-center justify-center border border-gray-300 rounded-md"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
              <button
                className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                onClick={() => onRemoveItem(item.id)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <div className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</div>
        <button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
          {isPopup ? 'To checkout' : 'Proceed to checkout'}
        </button>
      </div>
    </div>
  )
}