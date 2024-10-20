import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free water station"
          ],
          "price": 29.99
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "features": [
            "All features of Basic",
            "Access to group fitness classes",
            "1 guest pass per month",
            "Free Wi-Fi"
          ],
          "price": 49.99
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "features": [
            "All features of Standard",
            "Unlimited guest passes",
            "Personal trainer consultation (1 per month)",
            "Sauna and spa access"
          ],
          "price": 79.99
        },
        {
          "id": 4,
          "name": "Elite Membership",
          "features": [
            "All features of Premium",
            "Custom workout plans",
            "Nutrition counseling",
            "Priority booking for fitness classes",
            "Exclusive access to VIP lounge"
          ],
          "price": 119.99
        }
      ]
      
    return (
        <div className="m-10">
            <div className="grid md:grid-cols-3 gap-5">
            {
                PriceOptions.map(option => <PriceOption
                option={option}
                key={option.id}>
                </PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;