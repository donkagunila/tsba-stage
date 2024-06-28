import Button from "../../../components/base/buttons/Button";
import {renderInput} from "../../../utils/form.helper.tsx";
import {Input} from "../../../components/base/forms/form.properties.ts";
import {useForm} from "react-hook-form";
import FormLabel from "../../../components/base/forms/labels/FormLabel";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {

    const {register, control, handleSubmit} = useForm();

    const navigate = useNavigate();

    const inputs: Input[] = [
        {
            label: "Username",
            name: "username",
            type: "text",
            value: "",
            required: true,
            placeholder: "Enter Username",
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            value: "",
            required: true,
            placeholder: "*******",
        }
    ];

    const handleChange = () => {
        console.log("change")
    }

    const handleLogin = (data: any) => {
        console.log(data);
        localStorage.setItem("FARMUSER", "TESTUSERS");
        return navigate("/");
    }
    return (
        <div className="flex justify-center items-center h-screen w-full bg-slate-100/20 border-t-4 border-primary">
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="border border-slate-200/60 rounded-lg p-5 min-w-[350px]  bg-white pb-12">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="text-center text-slate-600 mt-9 mb-4">
                            <div className="font-semibold text-xl mb-1">Sign In</div>
                            <p className="text-xs ext-slate-400">Welcome back, login to access the platform</p>
                        </div>
                        <div className="flex justify-center items-center flex-col w-full mt-5">
                            {inputs.map((input) => (
                                <div key={input.name} className="min-w-[90%] mb-2">
                                    <FormLabel
                                        htmlFor={input.name}
                                        className="block font-normal text-sm text-slate-500 mb-1"
                                    >
                                        {input.label}
                                    </FormLabel>
                                    {renderInput(input, register, control, handleChange)}
                                </div>
                            ))}
                        </div>

                        <div className="w-full flex justify-center">
                            <Button variant="primary" className="min-w-[90%] py-3" type="submit">Sign In</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;