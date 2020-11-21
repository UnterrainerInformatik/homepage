export default {
    _Description: 'Access our private Stash repositories we use as release-master (read-only) <a href=\'<!--#AdrStash-->\' target=\'_blank\' class=\'btn btn-default btn-xs\'>here</a>.',
    _PageTitle: 'Free C# Libraries',
    _Title: 'Free C# Libraries',
    'Point1.Title': 'SplitStopWatch',
    'Point1.Value': 'This class implements a stopWatch.<p>Additionally to the normal stopWatch-functionality it may be used to debug out split-times as well. It measures the split-times and keeps track of the overall times in a variable.<p>It has a property \'isActive\' that defaults to true. When this is set to false all calls to this class are aborted within a single if-statement in the called method. This is a convenience function so that you may leave your logging-code in the production code.<p><a href=\'<!--#AdrGithub-->/splitstopwatch\' target=\'_blank\' class=\'btn btn-xs btn-block btn-primary\'>SplitStopWatch on Github</a>',
    'Point2.Title': 'LockFreeQueue',
    'Point2.Value': 'This class implements a lock-free FIFO-queue.<p>No monitors or lock-statements are used here. The pseudo-lock is established via memory-fences built by the Interlocked library.<p><a href=\'<!--#AdrGithub-->/lockfreequeue\' target=\'_blank\' class=\'btn btn-xs btn-block btn-primary\'>LockFreeQueue on Github</a>',
    'Point3.Title': 'ThreadPool',
    'Point3.Value': 'This class implements a thread-pool.<p>It buffers all the work items, which regrettably have to be classes, and reuses them. It only cleans them up at shutdown.<p>The reason we wrote this although there is the Parallels library is because unlike with that library you can enqueue different workers in a single thread-pool. It takes every function that is wrapped as a workload regardless of how many parameters or return-values it has. You can mix them all together and start the pool.<p><a href=\'<!--#AdrGithub-->/threadpool\' target=\'_blank\' class=\'btn btn-xs btn-block btn-primary\'>ThreadPool on Github</a>'
  }