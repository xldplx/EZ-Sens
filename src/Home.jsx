import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        function getRandomSensitivity(avg, deviation) {
            const min = avg - deviation;
            const max = avg + deviation;
            return Math.random() * (max - min) + min;
        }

        const generateSensButton = document.getElementById("generateSens");
        if (generateSensButton) {
            generateSensButton.addEventListener("click", () => {
                const avgSens = parseFloat(document.getElementById("avgSens").value);
                const devDiff = parseFloat(document.getElementById("devDiff").value);

                if (!isNaN(avgSens) && !isNaN(devDiff)) {
                    const randomSensitivity = getRandomSensitivity(avgSens, devDiff);
                    document.getElementById("result").value = randomSensitivity.toFixed(2);
                } else {
                    document.getElementById("result").value = 'Invalid number. Try again.';
                }
            });
        }

        // Cleanup event listener on component unmount
        return () => {
            if (generateSensButton) {
                generateSensButton.removeEventListener("click", () => {});
            }
        };
    }, []);

    return (
        <section className="h-screen bg-neutral-950 px-[5rem] flex justify-center items-center text-white">
            <div className="border-neutral-800 border rounded-lg h-[30rem] w-[25rem] p-[2rem] flex flex-col gap-[2rem]">
                <div>
                    <h1 className="text-[1.5rem]">EZ-Sens</h1>
                    <h1 className="text-neutral-500 text-[0.8rem]">Random Sensitivity Creator</h1>
                </div>
                <div className="space-y-2 flex flex-col">
                    <h1>Your Average Sensitivity:</h1>
                    <input type="number" name="" id="avgSens" className="w-full bg-neutral-950 border-neutral-800 border rounded-lg px-[0.5rem] h-[2.5rem]"/>
                    <h1>Deviation Difference:</h1>
                    <input type="number" name="" id="devDiff" className="w-full bg-neutral-950 border-neutral-800 border rounded-lg px-[0.5rem] h-[2.5rem]"/>
                    <button id="generateSens" className="flex self-center border-neutral-800 border px-[2rem] py-[0.5rem] rounded-lg transform-all duration-300 hover:bg-white hover:text-black">Randomize</button>
                </div>
                <div>
                    <h1>Your New Random Sensitivity:</h1>
                    <input type="text" name="" id="result" className="w-full bg-neutral-950 border-neutral-800 border rounded-lg px-[0.5rem] h-[2.5rem]"/>
                </div>
            </div>
        </section>
    );
}