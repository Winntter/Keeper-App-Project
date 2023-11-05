
function Footer() {


    const data = new Date; 
    const dataYear = data.getFullYear();

    return (
        <div>
            <footer>
                <p>Copyright © {dataYear}</p>
            </footer>
        </div>
    )
}

export default Footer