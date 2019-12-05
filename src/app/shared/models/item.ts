export interface Task {
    rsrcCount: number;
    startDate: string;
    origDueMS: number;
    origDoneMS: number;
    parentMileStones: string;
    isOverBooked: boolean;
    hasCharges: boolean;
    isCollapsed: boolean;
    numOfRoles: number;
    taskCode: string;
    taskName: string;
    doneMS: string;
    taskNum: number;
    taskID: number;
    dependency: string;
    doneDate: string;
    numOfItems: number;
    showChildTask: boolean;
    canWrite: boolean;
    taskStatusColor: string;
    dueMS: number;
    taskAgenda: string;
    dueDate: string;
    startMS: number;
    hasStartAndDueDates: boolean;
    origStartMS: string;
    isTaskVisible: boolean;
    taskWorkflowStatus: string;
    taskPriorityColor: string;
    isMileStone: boolean;
    numOfBlogs: number;
    BHMPH_Task: boolean;
    isTrigger: boolean;
    issueID: number;
    taskPriority: number;
    taskStatusName: string;
    isLocked: boolean;
    hasCustomForm: boolean;
    isDone: boolean;
    daartID: number;
    duration: number;
    indentLevel: number;
    taskStatus: string;
    totalHrs: number;
    hasChild: boolean;
    hasNote: boolean;
    assignedTo: [];
    tasks: Task[];

}