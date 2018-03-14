import os
import IdleRagnarok.server_functions.libconf as libconf
import io


def __db_constants():
    path = '../server_files/db/constants.conf'
    filename = os.path.join(os.path.dirname(__file__), path)

    with io.open(filename, 'r', encoding='utf-8', errors='replace') as f:
        config = libconf.load(f)

    return config


def parse_jobs():
    constants = __db_constants().constants_db
    jobs = {}
    for entry in constants:
        if entry.startswith('Job_'):
            job_name = entry.replace('_', ' ').strip('Job ')
            jobs[str(constants[entry])] = job_name
    return jobs
