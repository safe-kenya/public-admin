export default {
  all:trip => trip,
  running:trip => !trip.completedAt && !trip.isCancelled,
  //scheduled: trip => trip,
  complete: trip => trip.completedAt,
  cancelled: trip => trip.isCancelled
}