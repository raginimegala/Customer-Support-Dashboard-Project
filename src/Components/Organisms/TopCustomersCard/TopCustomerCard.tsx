import Card from '@/Components/Molecules/Cards';
import { customers } from '@/Constants/TopCustomerCard';

const TopCustomerCard = () => {
  return (
    <Card
      title="Top Customers"
      action={
        <button className="text-sm font-medium text-blue-600">View All</button>
      }
    >
      <div>
        <table className="w-full border-separate border-spacing-x-4 border-spacing-y-3 text-left">
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="text-slate-500">{customer.id}</td>
                <td className="text-slate-700">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-slate-200
                            font-semibold
                            text-slate-700
                        "
                    >
                      {customer.name.charAt(0)}
                    </div>
                    <span className="text-slate-700">{customer.name}</span>
                  </div>
                </td>
                <td className="text-slate-700">{customer.Tickets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default TopCustomerCard;
