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
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGRiYWIxODA4NjQ4NjI2ODI1MWY2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjM5OTM5MSwiZXhwIjoxNjY2ODMxMzkxfQ.xjx_SgXKKsqXshkbmmlEg4wN3ae2Et4P9-aUSJfEHKk',
                    },
                });
                setNewUsers(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
    }, []);
    console.log(newUsers);
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
                                    : 'https://lh3.googleusercontent.com/TOeoQB1hkdo1GKQs1SSTWuSzVsRl7bCP_UlUUQjGMBmwJin5HEOOE9xZ-F-tLWP8rpP0CeXaqGTHGw_tmTIjRIjIomf_sGtumOwwAQk8borrDxURYzcxGdQCcC9P7xyC4P8tb1S9350CFqr1h2G3sPUMVLeIQAwqnBBCo2I-6H6J3towY4qvX8up6DR7MPnIRiiBtR_yS4GPr-CHkCXqDvSumBQxTiVtlMD6kGwsCOxt2iVNV5Y_Fk8B58js643t5i5AkoYU_J7D_ghxiS-7JBE4ZP1x96-YUunINBxjjh1iZ1eCnJ3Ou3dipyQT9LSRgWLLpV1PSkjIzYx0udxqdg_JOdQQXZ7-Kj2faf4ZFIVG0wZWDvjQimHl8X1KhLKaicunYwBee6u7QHKOUafZsaJ-5HhpwcfxDgwTKpy8H6vUHSixuqwTRPZFaqJRhU6EuLIr1MVEuqeKcBNvyW4lQqLLZSf-8F2M8zgsAWkHzTn5QJbqwAsEF2yS9LyxjgM4W9suQ40Lj9Pb-gNefc3ohZHQHNIB1-A-eMxcokowZQW1CcfauzDsw3aWLTm2MNxYETn21luIvQmXauw-SkT1rHYICO2xC1LPimoc_CXNWUPE7MVcNgdO_gG4ekoAT9ipimXyVieyy2qtJEVRD5iD9oipNnQ_IK76z75SYATvWrkKhCEw7wTmMxxoHePAhZRkLhyFK3332TETD7MkuOGIbGZMct0ZodcauT27ZQ_ZVhUrAzmtTMsx-C-4GGivfN7XhdLb8FfCM_FvJzsZltFdXMUkI9o2np-1gYeEMix8ZGEyitjXKHr2aNQC7gEoVzamStx5PFB7tzahrlDj4pAMBoZ2EFSsyHpdDEt64X0z9w3WopaYMUA9Kj-2Zhv3f1LNSSprMzBD91x_rFmy1vtlFnh6jTzRuF3xVzSIaWo3=w703-h938-no?authuser=0'
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
