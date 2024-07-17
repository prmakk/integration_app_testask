import React from "react";
import styles from "./MainPage.module.scss";
import FaqQuestion from "../components/FaqQuestion/FaqQuestion";
import SvgAdd from "../components/SvgAdd";
import SvgUpdate from "../components/SvgUpdate";
import SvgDelete from "../components/SvgDelete";

const MainPage = () => {
    return (
        <div className={styles.main}>

            <header className={styles.header}>
                <h1>How to work with Contacts in Hubspot API</h1>
                <p>
                    Contacts represent records about people in Hubspot API. They
                    are typically associated with Companies and Activities such
                    as Emails, Meetings, Notes, etc.
                </p>
            </header>

            <p className={styles.subtitle}>Contact Fields</p>

            <div className={styles.table_container}>
                <div className={styles.ellipse}></div>
                <table>
                    <thead>
                        <tr>
                            <th>Field Name</th>
                            <th>API Key</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>first_name</td>
                            <td>string</td>
                            <td>First name of the person</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>last_name</td>
                            <td>string</td>
                            <td>Last name of the person</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>address</td>
                            <td>object</td>
                            <td>Address associated with the person</td>
                        </tr>
                        <tr>
                            <td>Full</td>
                            <td>address.full</td>
                            <td>string</td>
                            <td>Full address associated with the per</td>
                        </tr>
                        <tr className={styles.no_border}>
                            <td>Street</td>
                            <td>address.streeet</td>
                            <td>string</td>
                            <td>Street address</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={styles.faq}>
                <p className={styles.title}>Operations on Contacts Collection</p>

                <div className={styles.questions}>
                    <FaqQuestion icon={<SvgAdd />} text={'Create a Contact'}/>
                    <FaqQuestion icon={<SvgUpdate />} text={'Update a Contact'}/>
                    <FaqQuestion icon={<SvgDelete />} text={'Delete a Contact'}/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
