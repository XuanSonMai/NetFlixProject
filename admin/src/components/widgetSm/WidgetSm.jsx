import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get('/users?new=true', {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGRiYWIxODA4NjQ4NjI2ODI1MWY2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Njk1Mzc0MSwiZXhwIjoxNjY3Mzg1NzQxfQ.9AslbHkGoGQRB2TU-takF9zna-YUlY-snP3Fu1qxxsg',
                    },
                });
                setNewUsers(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
    }, []);

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers?.map((user) => (
                    <li className="widgetSmListItem">
                        <img
                            src={
                                user.isAdmin
                                    ? 'https://scontent-itm1-1.xx.fbcdn.net/v/t1.6435-9/163523424_4009052345856356_8644733701576205657_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=h91Z0Is_Ml8AX_bHYKJ&tn=a6Jfhl0SqJ5lB9Gr&_nc_ht=scontent-itm1-1.xx&oh=00_AT8XSWt_zITv720HXOiZpBdFuj-0J9cIR908I7kcx9BKTg&oe=637D4E06'
                                    : 'https://lh3.googleusercontent.com/pCjoZ64I_Pc2hRkmpqgSjmaNSTCjsHaNLNljtEVBlLehvwE92s_VPMoNbpOqtAkcolcFmOLLosiu3sj-zN7FUyoixPM0wZ5Eb2IPe_YGKSsviPjOoG0N8l4UYGhbg6kQ7r0NBjb_abxo9L5OGEkaoj3in5tOyOaVROdr1JAfVqtt1-LpQgtoN09RnuKJMlfpGwWaFcTiJYP1Eb734HSlYGfYrOmQGBMe4RgZcyaC0KbsiUGHV1S356B3M-uJzCrNJRxU3lhciXol_pMLwqJtq_kxMOVILGjvnU6P_hBR2I69X3BMoWJVHULlwJx75R_YviSb7GbUHyD470mmyVccRUA3rymaINhhE8z2o7Mr9sGh-ykEkE34cMTUVyv680u40dRxH6o5PoxWhS9-Ge802Dy8qiU1B0zlBKuVqkmSybXl9MwNaPDu_MLRW01JAc-F81F9fPQpESRlZxMI5Oih7BBe7JojLfSowXGIqgqGe2byP4TsKiR_0Nw_Lo0mgcOVLVgKx8B75PEwNJb9I_r5WioZ_75ZSGSwABov0JEzAUry_w9O92SlGbyJad21zfstMnspj-rR9bqP3gtlXR4aMOgb3nsxIyXmj1MZGSnFhC8OJkJ2nXLM8WiI1iT0Rh2Q_SurzVT60s58l_K_GKHbSlH1eJstaNRQCo6RTVZA0UKcYMHNZ_-khOo2fUyYA6tnsXUc7mkCRvn_ggskjf2-B_3RV3S4KPM6O8QN1qCdcyRQzkIwRdG7j88KRvh60lDEL0RXMIBTF4wsElDNA_c8drkPU4IxRfLrg5nf87cfdLY8biRiXF5o2AOi6FJSlF3ATcg4GnMDq2ks2TsXE3ugsOIc9hzbmawvx1hEl2c3fFWTkYLBNuIGHCGpabnPkNRc_b_QdicoXq3x-_O4xvRBKp2sjvbmp8le0dan2g=w1184-h1580-no?authuser=0'
                            }
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                            <span className="widgetSmUserTitle">{user.isAdmin ? 'ADMIN' : 'MEMBER'}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
