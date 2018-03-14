from IdleRagnarok.server_functions.file_parser import parse_jobs


class DBConnector:
    def __init__(self):
        self.jobs = parse_jobs()
        print("... loading Database.")

    def id2class(self, class_id):
        return self.jobs[str(class_id)]
