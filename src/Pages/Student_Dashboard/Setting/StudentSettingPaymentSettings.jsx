import { useState } from "react";
import { motion } from "framer-motion";
import { Save, CreditCard, Check, Copy } from "lucide-react";

const StudentSettingPaymentSettings = () => {
    const [paymentMethods, setPaymentMethods] = useState([
        {
            id: 1,
            type: "Credit Card",
            brand: "Visa",
            last4: "4242",
            expiry: "12/24",
            isDefault: true,
        },
        {
            id: 2,
            type: "PayPal",
            email: "alex.johnson@example.com",
            isDefault: false,
        },
    ]);

    const [newCard, setNewCard] = useState({
        cardNumber: "",
        expiry: "",
        cvc: "",
        nameOnCard: "",
    });

    const [showAddCardForm, setShowAddCardForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCard({
            ...newCard,
            [name]: value,
        });
    };

    const handleAddCard = (e) => {
        e.preventDefault();
        // Simulate adding a new card
        const newPaymentMethod = {
            id: Date.now(),
            type: "Credit Card",
            brand: "Unknown", // In a real app, you'd determine the brand
            last4: newCard.cardNumber.slice(-4),
            expiry: newCard.expiry,
            isDefault: false,
        };
        setPaymentMethods([...paymentMethods, newPaymentMethod]);
        setNewCard({ cardNumber: "", expiry: "", cvc: "", nameOnCard: "" });
        setShowAddCardForm(false);
    };

    const handleSetDefault = (id) => {
        setPaymentMethods(
            paymentMethods.map((method) => ({
                ...method,
                isDefault: method.id === id,
            }))
        );
    };

    const handleCopyCardNumber = () => {
        // Simulate copying card number to clipboard
        alert("Card number copied to clipboard!");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Payment settings updated:", paymentMethods);
        // Show success message or handle API call
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6"
        >
            <h2 className="text-xl font-bold mb-6">Payment Settings</h2>

            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Payment Methods</h3>

                    <div className="space-y-3">
                        {paymentMethods.map((method) => (
                            <div
                                key={method.id}
                                className="border rounded-lg p-4 flex items-center justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-2">
                                        <CreditCard className="h-5 w-5" />
                                        <span className="font-medium">
                                            {method.type}{" "}
                                            {method.brand &&
                                                `(${method.brand})`}
                                        </span>
                                        {method.isDefault && (
                                            <span className="bg-green-100 text-green-600 rounded-full px-2 py-0.5 text-xs">
                                                Default
                                            </span>
                                        )}
                                    </div>
                                    {method.type === "Credit Card" && (
                                        <div className="text-sm text-muted-foreground mt-1">
                                            **** **** **** {method.last4} •
                                            Expires {method.expiry}
                                        </div>
                                    )}
                                    {method.type === "PayPal" && (
                                        <div className="text-sm text-muted-foreground mt-1">
                                            {method.email}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {!method.isDefault ? (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleSetDefault(method.id)
                                            }
                                            className="text-sm text-primary hover:underline"
                                        >
                                            Set as Default
                                        </button>
                                    ) : (
                                        <Check className="h-4 w-4 text-green-500" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {!showAddCardForm ? (
                        <button
                            type="button"
                            onClick={() => setShowAddCardForm(true)}
                            className="text-sm text-primary hover:underline"
                        >
                            + Add New Card
                        </button>
                    ) : (
                        <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-3">
                                Add New Credit Card
                            </h4>
                            <form
                                onSubmit={handleAddCard}
                                className="space-y-3"
                            >
                                <div>
                                    <label
                                        htmlFor="cardNumber"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Card Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="cardNumber"
                                            name="cardNumber"
                                            type="text"
                                            value={newCard.cardNumber}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring pr-10"
                                            placeholder="Enter card number"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={handleCopyCardNumber}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                                        >
                                            <Copy className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="expiry"
                                            className="block text-sm font-medium mb-1"
                                        >
                                            Expiry Date
                                        </label>
                                        <input
                                            id="expiry"
                                            name="expiry"
                                            type="text"
                                            value={newCard.expiry}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                            placeholder="MM/YY"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="cvc"
                                            className="block text-sm font-medium mb-1"
                                        >
                                            CVC
                                        </label>
                                        <input
                                            id="cvc"
                                            name="cvc"
                                            type="text"
                                            value={newCard.cvc}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                            placeholder="CVC"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="nameOnCard"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Name on Card
                                    </label>
                                    <input
                                        id="nameOnCard"
                                        name="nameOnCard"
                                        type="text"
                                        value={newCard.nameOnCard}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder="Enter name on card"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end gap-2">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowAddCardForm(false)
                                        }
                                        className="bg-muted hover:bg-muted/80 rounded-lg px-4 py-2 text-sm"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm"
                                    >
                                        Add Card
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>

                <div className="flex justify-end pt-4 border-t">
                    <button
                        type="submit"
                        className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm flex items-center gap-1"
                    >
                        <Save className="h-4 w-4" />
                        <span>Save Payment Settings</span>
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default StudentSettingPaymentSettings;
