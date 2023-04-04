export default function AddToCart({ setIsOpenCart, classNames }) {

    const quantity = 1;

    return (
        <button
            type="submit"
            // onClick={() => increaseCartQuantity(id)}
            className={classNames}
        >
            {quantity === 0 ? (
                "Add to Bag"
            ) : (
                "Added"
            )}
        </button>
    );
}
