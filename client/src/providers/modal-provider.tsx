import { useEffect, useState } from "react";
import LoginModal from "@/components/modals/login-modal";
import DeliveryAddressModal from "@/components/modals/delivery-address-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return (
        <>
            <LoginModal />
            <DeliveryAddressModal />
        </>
    )
}