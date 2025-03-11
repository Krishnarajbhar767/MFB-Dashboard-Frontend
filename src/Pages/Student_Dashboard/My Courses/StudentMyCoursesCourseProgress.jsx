const StudentMyCoursesCourseProgress = ({ progress }) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium">{progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
                <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default StudentMyCoursesCourseProgress;
