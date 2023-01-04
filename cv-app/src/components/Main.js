import Button from "./Button";

const Tech = ({ techs }) => {
    return (
        <ul>
            {techs.map((e) => (
                <li>{e}</li>
            ))}
        </ul>
    );
};

const UserCard = ({ img, firstname, lastname }) => {
    return (
        <div>
            <img src={img} alt="user" width={150} />
            <h4>
                {firstname} {lastname}
            </h4>
        </div>
    );
};

export default function Main({ user, techs, greetPeople, showDate }) {
    const userInfo = {
        ...user,
        img: "https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg",
    };

    let imgPa = "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png";

    const users = [
        {
            img: imgPa,
            firstname: "Bold",
            lastname: "Dulam"
        },
        { img: imgPa, firstname: "Gan", lastname: "Lkham" },
        { img: imgPa, firstname: "Sukh", lastname: "Khorloo" },
        { img: imgPa, firstname: "Gonchig", lastname: "Lkhagva" },
    ]

    return (
        <div>
            <div>
                <h4>Tech Stack</h4>
                <Tech techs={techs} />
                <UserCard {...userInfo} />

                {users.map((userInfo) => {
                    return <UserCard {...userInfo} />;
                })}
                <Button text="Greet People" status={true} func={greetPeople} />
                <Button text="Show Date" status={false} fuct={showDate} />

            </div>
        </div>
    );
}