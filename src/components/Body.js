import React, { useContext, useEffect, useState } from 'react'
import { mobileNav } from '../App'
import IlustrationWorkingImage from '../images/illustration-working.svg'

function Body() {
    let [requestUrl, setRequestUrl] = useState("");
    let [urlFromButtonClick, setUrlFromButtonClick] = useState("");
    let [buttonClicked, setButtonClicked] = useState(false);
    let [isMobileNavOpen, setisMobileNavOpen] = useContext(mobileNav)
    let [textError, setTextError] = useState("");
    let [isError, setIsError] = useState(false)
    let [loading, setLoading] = useState([]);
    let [fetchLoader, setFetchLoaader] = useState(false)
    let [newLinks, setNewLinks] = useState(() => {
        let storednewLinks = localStorage.getItem('newShortenedLinks')
        return storednewLinks ? JSON.parse(storednewLinks) : [];
    })
    let [storageData, setStorageData] = useState(() => {
        let storedLinks = localStorage.getItem('shortenedLinks')
        return storedLinks ? JSON.parse(storedLinks) : [];
    });
    function toggleMobileNav(e) {
        setisMobileNavOpen(!isMobileNavOpen)
    }

    function handleChange(e) {
        setRequestUrl(e.target.value)
    }
    function handleClick(e) {
        if (requestUrl === "") {
            setTextError("please add a link");
            setIsError(true)
            return;
        } else {
            setUrlFromButtonClick(requestUrl);
            setButtonClicked(true)
            setIsError(false)
            setTextError("")
            setRequestUrl("")
        }
    }
    const fetchData = (url) => {

        setFetchLoaader(true)
        let finalUrl = `https://is.gd/create.php?format=json&url=${url}`
        fetch(finalUrl)
            .then(res => { return res.json() })
            .then(data => {
                setFetchLoaader(false)
                if (data.shorturl) {
                    setTextError("")
                    setIsError(false)
                    setStorageData([urlFromButtonClick, ...storageData])
                    setNewLinks([data.shorturl, ...newLinks])
                } else if (data.errorcode === 1) {
                    setTextError(data.errormessage)
                    setIsError(true)
                } else if (data.errorcode === 3) {
                    setTextError("Rate limit exceeded please try again later")
                    setIsError(true)
                } else if (data.errorcode === 4) {
                    setTextError("Oops! Something went wrong.")
                    setIsError(true)
                }
            }).catch(err => {
                setFetchLoaader(false)
                setTextError("An error occurred while fetching data. Please try again later.")
                setIsError(true);
                return;
            })
    }
    useEffect(() => {
        const storedLinks = localStorage.getItem('shortenedLinks');
        const storedNewLinks = localStorage.getItem('newShortenedLinks')
        if (storedLinks && storedNewLinks) {
            setStorageData(JSON.parse(storedLinks))
            setNewLinks(JSON.parse(storedNewLinks))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('shortenedLinks', JSON.stringify(storageData))
        localStorage.setItem('newShortenedLinks', JSON.stringify(newLinks))
    }, [storageData])

    useEffect(() => {
        if (buttonClicked && urlFromButtonClick) {
            fetchData(urlFromButtonClick)
            setButtonClicked(false)
        }
    }, [urlFromButtonClick, buttonClicked])

    function copyCurrentLinks(id, e, item, newLink) {
        let newLoadingStates = [...loading];
        newLoadingStates[id] = true;
        setLoading(newLoadingStates)
        const copyToClipboard = text => navigator.clipboard
            ?.writeText && navigator.clipboard.writeText(text);

        setTimeout(() => {
            copyToClipboard(newLink).then(() => {
                let newLoadingStates = [...loading];
                newLoadingStates[id] = false;
                setLoading(newLoadingStates);
            });
        }, 1000)


    }
    function setData() {
        return storageData.map((item, index) => (
            <SetNewData key={index} index={index} item={item} newLink={newLinks[index]} />
        ))
    }
    function SetNewData({ index, item, newLink }) {
        return (
            <div className='shortened-links-box' key={index}>
                <div className="url-text">
                    <h3 className="url-text-h3">{item}</h3>
                </div>
                <div className="new-link">
                    <p className="new-link-p">{newLink}</p>
                    <button type="button" className="copyBtn" disabled={loading[index]} style={{ backgroundColor: loading[index] ? "hsl(257, 27%, 26%)" : "" }} onClick={(e) => copyCurrentLinks(index, e, item, newLink)}>{loading[index] ? "Copied!" : "Copy!"}</button>
                </div>
            </div>
        )
    }
    return (
        <main className='main-class'>
            <div className='inner-main-class'>
                <div className="working-image">
                    <img src={IlustrationWorkingImage} alt="Ilustration working image" />
                </div>
                <div className="des-text">
                    <h1>More than just
                        <br />
                        shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <button className="get-started">Get Started</button>
                </div>
            </div>
            <div className="link-session">
                <div className="input-session" id="link-session">
                    <input type="url" className={`${"url-value"} ${isError ? "invalid" : ""}`} placeholder="Shorten a link here..." value={requestUrl} onChange={handleChange} />
                    <p className="text">{textError}</p>
                    <button type="submit" className="shorten" onClick={handleClick} disabled={fetchLoader}>{fetchLoader ? 'Shortening...' : 'Shorten It!'}</button>
                </div>
                {/* shortened links */}
                <div className="shortened-links">
                    {/* WORK ON THIS TO UPDATE THE VALUESS DYNAMICALLY*/}
                    {
                        setData()

                    }

                </div>
                {/* Stactics session */}
                <div className="advanced-statics">
                    <h2>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with our advanced statics dashboard.</p>

                    <div className="boxes">
                        <div className="recognition">
                            <div className="img-box-recognition"></div>
                            <h4>Brand Recongnition</h4>
                            <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                        </div>
                        <div className="records">
                            <div className="img-box-records"></div>
                            <h4>Detailed Records</h4>
                            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                        </div>
                        <div className="customizable">
                            <div className="img-box-customizable"></div>
                            <h4>Fully Customizable</h4>
                            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pre-footer">
                <h3>Boost your links today</h3>
                <button type="button" className="get-started">Get Started</button>
            </div>
            <div className={isMobileNavOpen ? "overlay" : "hidden"} onClick={toggleMobileNav}></div>
        </main>
    )
}


export default Body
