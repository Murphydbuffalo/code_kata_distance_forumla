def distance(point_A, point_B) # Distance between two points (pairs of X,Y coordinates)
  x_diff = (point_A.first - point_B.first).abs
  y_diff = (point_A.last - point_B.last).abs
  dist_squared = (x_diff ** 2) + (y_diff ** 2) # a^2 + b^2 = c^2 
  dist = sprintf('%.3f', Math.sqrt(dist_squared)).to_f # Take square root of c
end

puts distance([1,3], [5,19])

# .sprintf is nice for formatting but it outputs a string, so you need to convert.




   
  


