import { useState, useEffect } from 'react';

interface TimeLeft {
    hours: string | number;
    minutes: string | number;
    seconds: string | number;
}

const CountDown: React.FC = () => {

    // Set eventDate 5 hours into the future
    const eventDate = new Date(new Date().getTime() + 5 * 60 * 60 * 1000);
    const _isForLiveChatAd = true;

    // Calculate time left function with explicit return type
    const calculateTimeLeft = (): TimeLeft | null => {
        const currentTime = new Date();
        const timeDifference = eventDate.getTime() - currentTime.getTime();

        if (timeDifference < 0) {
            if (_isForLiveChatAd) return null;
            // Event has already passed
            return {
                hours: '00',
                minutes: '00',
                seconds: '00',
            };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        // Convert days to hours and add to the total hours
        hours = days * 24 + hours;

        return {
            hours,
            minutes,
            seconds,
        };
    };

    // Use state with an explicit type for remaining time
    const [remainingTime, setRemainingTime] = useState<TimeLeft | null>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            const timeLeft = calculateTimeLeft();
            setRemainingTime(timeLeft);

            // Reload the page when countdown reaches zero
            if (timeLeft && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
                window.location.reload();
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='bg-pink-600 px-4 py-2 rounded-md text-white w-[max-content] my-2'>
            {remainingTime && (
                <div>
                    {remainingTime.hours.toString().length > 1
                        ? remainingTime.hours.toString()
                        : '0' + remainingTime.hours.toString()}
                    :
                    {remainingTime.minutes.toString().length > 1
                        ? remainingTime.minutes.toString()
                        : '0' + remainingTime.minutes.toString()}
                    :
                    {remainingTime.seconds.toString().length > 1
                        ? remainingTime.seconds.toString()
                        : '0' + remainingTime.seconds.toString()}
                </div>
            )}
        </div>
    );
};

export default CountDown;
